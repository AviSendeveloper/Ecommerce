const mongoose = require("mongoose");

const mongodbUri = process.env.DB_URI || "mongodb://localhost:27017/Ecommerce";
module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(mongodbUri)
            .then((res) => {
                return resolve(mongodbUri);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
