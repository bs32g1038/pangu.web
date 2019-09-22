/**
 * 接口响应返回的 状态码和信息
 * 响应成功统一响应 200
 * 规则：
 *      400 -> 400x
 *      500 -> 500x
 * 备注：此处的 code 与 http 的状态码不一样。
 */
const ResponseCode = {
    SUCCESS: {
        code: 200,
        message: '成功',
    },
};

/**
 * 响应成功
 * @param {object} data 
 */
const success = data => {
    const { code, message } = ResponseCode.SUCCESS;
    return {
        code,
        message,
        data,
    };
};

/**
 * 响应失败
 * @param {object} data 
 */
const failure = (responseCode, data) => {
    if (!(responseCode instanceof ResponseCode)) {
        throw new Error('The responseCode must be an ResponseCode object ');
    }
    const { code, message } = responseCode;
    return {
        code,
        message,
        data,
    };
};

exports.ResponseCode = ResponseCode;
exports.success = success;
exports.failure = failure;
