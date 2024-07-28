import { userModel } from "../models/userModel.js";

export const add = async (req, res) => {
  const { name, age } = req.body;
  try {
    const newUser = await userModel.create({ name, age });
    res.send(newUser);
  } catch (error) {
    res.send(error);
  }
};

export const get = async (req, res) => {
  try {
    const all_users = await userModel.find({});
    res.send(all_users);
  } catch (error) {
    res.send(error);
  }
};
