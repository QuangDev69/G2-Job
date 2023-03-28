import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import React from 'react'

const Landing = () => {
  const { user } = useAppContext()
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              G2 <span>Job</span> App
            </h1>
            <p>
              Everyone is a genius. But if you judge a fish by its ability to
              climb a tree, it will live its whole life believing that it is
              stupid.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img className="img main-img" src={main} alt="job hunt" />
        </div>
      </Wrapper>
    </React.Fragment>
  )
}

export default Landing
