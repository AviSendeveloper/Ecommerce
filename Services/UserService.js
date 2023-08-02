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

exports.checkUserExist = async (email) => {
    const user = await User.findOne({ email: email });
    if (user) {
        return {
            status: true,
            data: user,
        };
    } else {
        return {
            status: false,
            data: null,
        };
    }
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

exports.userList = async ({ userType }) => {
    const admins = await User.find({ userType });
    return {
        status: true,
        data: admins,
    };
};

exports.userDetails = async (userId) => {
    const details = await User.findById(userId);
    return {
        status: true,
        data: details,
    };
};

exports.updateUser = async ({ userId, ...details }) => {
    const response = await User.findByIdAndUpdate(
        userId,
        { ...details },
        { new: true }
    );

    return {
        status: true,
        data: response,
    };
};

exports.deleteUser = async (userId) => {
    const response = await User.deleteOne({ _id: userId });
    return {
        status: true,
    };
};
