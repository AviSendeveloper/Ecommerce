const User = require("../Models/User");
const bcrypt = require("bcrypt");

exports.matchUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    const response = {
        status: false,
    };

    if (!user) {
        response.msg = "Not Found";
        return response;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
        response.msg = "Password not match";
        return response;
    }

    response.status = true;
    response.data = user;
    return response;
};

exports.createUser = async ({
    firstname,
    lastname,
    email,
    phone,
    password,
    userType,
}) => {
    const salt = 5;
    const hashPassord = await bcrypt.hash(password, salt);
    // const hashPassord = "abc";

    const user = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password: hashPassord,
        userType,
    });

    return {
        status: true,
        data: user,
    };
};
