import { UnAuthenticatedError } from '../errors/index.js'
import jwt from 'jsonwebtoken'
UnAuthenticatedError
const auth = async (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    throw new UnAuthenticatedError('Authentication Invalid!')
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const testUser = payload.userID === '642311e1b2125db5b3487813'
    req.user = { userID: payload.userID }

    next()
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid')
  }
}
export default auth
