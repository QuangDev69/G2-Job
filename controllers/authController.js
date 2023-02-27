import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError } from "../errors/index.js"

const register = async (req, res, next) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
      throw new BadRequestError("Vui lòng nhập đủ thông tin!")
    }

    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
      throw new BadRequestError("Email đã tồn tại!")
    }
    const user = await User.create(req.body);
    res.status(StatusCodes.OK).json({ user });
}
const login = async (req, res) => {
  res.send("login user");
};
const updatedUser = async (req, res) => {
  res.send("updated user");
  User.findOneAndUpdate
};
export { register, login, updatedUser };
