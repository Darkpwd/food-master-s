import mongoose from "mongoose";
import colors from "colors";

// function to connect database
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      colors.bgWhite.black(
        `✅ Connected to MongoDB: ${mongoose.connection.host}`
      )
    );
  } catch (error) {
    console.error(
      colors.bgRed.white(`❌ Error connecting to MongoDB: ${error.message}`)
    );
    process.exit(1);
  }
};
