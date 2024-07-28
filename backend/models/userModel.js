import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("User", userSchema);
