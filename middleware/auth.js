import { UnAuthenticatedError } from '../errors/index.js'
import jwt from 'jsonwebtoken'
UnAuthenticatedError
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('Auth Invalid')
  }

  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const testUser = payload.userID === '64131b5d8112fc3f359083ff'
    req.user = { userID: payload.userID, testUser }

    next()
  } catch (error) {
    throw new UnAuthenticatedError('Auth Invalid')
  }
}
export default auth
