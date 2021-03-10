module.exports = function returnData(data = '', msg, code = 1) {
    return {
        code,
        msg,
        data,
    }
}