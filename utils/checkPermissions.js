import { UnAuthenticatedError } from '../errors/index.js'

const checkPermissions = (requestUser, resourceUserID) => {
  if (requestUser.userID === resourceUserID.toString()) return

  throw new UnAuthenticatedError('Not authorized to access this resource')
}

export default checkPermissions
