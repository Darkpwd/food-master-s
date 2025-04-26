//REGISTER
import { user as UserModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address, answer } = req.body;
    // validate datas of my body request
    if ((!userName || !email || !password || !phone || !address, !answer)) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    // check user
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res.status(409).send({
        success: false,
        message: "Email Already Registered Please Login.",
      });
    }

    // encrypt password
    let salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user
    const newUser = await UserModel.create({
      userName,
      email,
      password: hashedPassword,
      phone,
      address,
      answer,
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered!",
      UserModel,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Email Or Password!",
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found Or Password MisMatch!",
      });
    }

    const isMatchData = await bcrypt.compare(password, user.password);
    if (!isMatchData) {
      return res.status(401).send({
        success: false,
        message: "Invalid Credentials!",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined;

    res.status(200).send({
      success: true,
      message: "Login successfully!",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    });
  }
};
