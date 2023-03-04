import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const register = async (req, res, next) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    throw new BadRequestError('Vui lòng nhập đủ thông tin!')
  }

  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError('Email đã tồn tại!')
  }
  const user = await User.create(req.body)
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  })
}
const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Vui lòng nhập đầy đủ thông tin!')
  }
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new UnAuthenticatedError('Thông tin không hợp lệ!')
  }

  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError('Thông tin không hợp lệ!')
  }

  user.password = undefined
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user, location: user.location, token })
}
const updateUser = async (req, res) => {
  const { email, name, location, lastName } = req.body
  if (!email || !name || !location || !lastName) {
    throw new BadRequestError('Vui lòng nhập đủ thông tin!')
  }
  const user = await User.findOne({ _id: req.user.userID })
  user.email = email
  user.name = name
  user.lastName = lastName
  user.location = location
  await user.save()
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user, location: user.location, token })
}

export { register, login, updateUser }
