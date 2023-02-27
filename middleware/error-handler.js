import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err.message)

  const defaultError = {
    statusCode : StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Đã xảy ra sự cố, vui lòng thử lại sau :(("
  }

  if (err.name === "ValidationError") {
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    // defaultError.msg = err.message
    defaultError.msg = Object.values(err.errors)
    .map((item)=> item.message).join(',')
  }

  if( err.code && err.code === 11000){
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    defaultError.msg = `${Object.keys(err.keyValue)} phải là duy nhất `
  }

  res.status(defaultError.statusCode).json({msg: defaultError.msg})
}
export default errorHandlerMiddleware