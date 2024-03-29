import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'
import Alert from './Alert'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer'

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    page,
    isLoading,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext()

  useEffect(() => {
    getJobs()
  }, [page, search, searchStatus, searchType, sort])

  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...!</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>{totalJobs} Job </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}
export default JobsContainer
