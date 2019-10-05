const Controller = require('egg').Controller;
const ResponseResult = require('../base/response-result');
const awaitWriteStream = require('await-stream-ready').write;
const crypto = require('../utils/crypto');
const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');

class UploadController extends Controller {
    async upload() {
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        //新建一个文件名
        const filename = crypto.md5(stream.filename) + path.extname(stream.filename).toLocaleLowerCase();
        //文件生成绝对路径
        //当然这里这样市不行的，因为你还要判断一下是否存在文件路径
        const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
        //生成一个文件写入 文件流
        const writeStream = fs.createWriteStream(target);
        try {
            //异步把文件流 写入
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            //如果出现错误，关闭管道
            await sendToWormhole(stream);
            throw err;
        }
        //文件响应
        ctx.body = ResponseResult.success({
            url: 'http://127.0.0.1:7001/public/uploads/' + filename,
        });
    }
}
module.exports = UploadController;
