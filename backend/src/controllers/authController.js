//REGISTER
import { user } from "../models/userModel.js";
export const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    // validate datas of my body request
    if (!userName || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    // check user
    const userExist = await user.findOne({ email });
    if (userExist) {
      return res.status(409).send({
        success: false,
        message: "Email Already Registered Please Login.",
      });
    }
    // create new user
    const newUser = await user.create({
      userName,
      email,
      password,
      phone,
      address,
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered!",
      user,
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
