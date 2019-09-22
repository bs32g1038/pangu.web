/**
 * 加密工具类api
 */
const crypto = require('crypto-js');

/**
 * 进行 md5 加密
 * @param {string} str 
 * @return {string} md5 值
 */
export const md5 = str => {
    const isBuffer = Buffer.isBuffer(str);
    if (isBuffer) {
        str = str.toString('binary');
    }
    return crypto.MD5(str).toString(crypto.enc.Hex);
};

/**
 * 进行 SHA1 加密
 * @param {string} value 原值
 * @return {string} SHA1 值
 */
export const sha1 = value => {
    return crypto.SHA1(value).toString(crypto.enc.Hex);
};

/**
 * 用于字符串加密
 * 加密规则：
 * 对字符串进行 md5 处理生成 32 位字符串， 对字符串进行平分 s1, s2
 * 利用 AES 加密字符串 s_aes
 * 结果字符串为：s1 + s_aes + s2
 * @param {string} str
 * @return {string} 加密后的值
 */
export const encrypt = str => {
    const m = crypto.MD5(str);
    const s = m.toString(crypto.enc.Hex);
    const s1 = s.slice(0, s.length / 2);
    const s2 = s.slice(s.length / 2, s.length);
    const encrypted = crypto.AES.encrypt(str, s);
    return s1 + encrypted.toString() + s2;
};

/**
 * 对应上述的解码
 * @param {string} str 
 * @return {string} 解密后的值
 */
export const decrypt = str => {
    const s1 = str.slice(0, 16);
    const s2 = str.slice(str.length - 16, str.length);
    const key = str.slice(16, str.length - 16);
    return crypto.AES.decrypt(key, s1 + s2).toString(crypto.enc.Utf8);
};

/**
 * 获取 PBKDF2 算法生成的密钥
 * 常用于密码的正向唯一生成
 * @param {string} str 
 * @return {string} 密钥
 */
export const getDerivedKey = str => {
    return crypto.PBKDF2(str, 'salt', 1, 32, 'sha512').toString(crypto.enc.Hex);
};
