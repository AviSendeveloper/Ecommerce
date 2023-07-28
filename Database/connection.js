const mongoose = require("mongoose");

module.exports = (mongodbUri) => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(mongodbUri)
            .then((res) => {
                return resolve();
            })
            .catch((err) => {
                reject(err);
            });
    });
};
