import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'

const createJob = async (req, res) => {
  const { position, company } = req.body
  if (!position || !company) {
    throw new BadRequestError('Vui lòng nhập đầy đủ thông tin!')
  }
  req.body.createdBy = req.user.userID
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}
const getAllJobs = async (req, res) => {
  res.send('get All job ')
}
const updateJob = async (req, res) => {
  res.send('update job ')
}
const deleteJob = async (req, res) => {
  res.send('delete job ')
}
const showStats = async (req, res) => {
  res.send('show stats')
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
