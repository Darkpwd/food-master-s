import { user as UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const getUserController = async (req, res) => {
  try {
    // find user
    const user = await UserModel.findById({ _id: req.body.id });

    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found!",
      });
    }

    // hide password
    user.password = undefined;

    // response
    res.status(200).send({
      success: true,
      message: "User GET successfully!!",
      user, // ✅ now returns the user
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in GET User API",
      error,
    });
  }
};

// UPDATE USER
export const updateUserController = async (req, res) => {
  try {
    // find user
    const user = await UserModel.findById({ _id: req.body.id });

    // validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found!",
      });
    }

    // update fields
    const { userName, address, phone, email } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    if (email) user.email = email;

    // save user
    await user.save();
    res.status(200).send({
      success: true,
      message: "User Updated Successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in UPDATE User API",
      error,
    });
  }
};

// RESET PASSWORD
export const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    if ((!email, !newPassword, !answer)) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields!",
      });
    }

    const user = await UserModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email or Answer!",
      });
    }
    //encrypt password
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Reset Password API",
      error,
    });
  }
};
