const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true,
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        dp: {
            type: String,
        },
        userType: {
            type: String,
            enum: ["admin", "user"],
            required: true,
        },
    },
    { timestamps: true }
);

userSchema.virtual("fullname").get(function () {
    const fullname = `${this.firstname} ${this.lastname}`;
    return fullname;
});

module.exports = model("User", userSchema);
