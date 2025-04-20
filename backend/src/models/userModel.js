import mongoose from "mongoose";

//schema configs
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required field!"],
    },
    email: {
      type: String,
      required: [true, "email address is required field!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "the password is required field!"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone number is required field!"],
    },
    usertype: {
      type: String,
      required: [true, "user type is required field!"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("user", userSchema);

// Exportar o modelo
export { user };
