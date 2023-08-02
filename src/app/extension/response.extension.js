const onSuccess = function (success) {
    const { status, ...res } = success;
    this.status = status;
    this.body = { ...res };
}

const onError = function (errorData) {
    // console.log(errorData);
    const err = new Error(errorData.message);
    err.status = errorData.status || 500;
    err.data = errorData;
    throw err;
};

module.exports = {
    onSuccess, onError
}