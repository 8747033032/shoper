import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from './Button/Login'
import Signup from './Button/signup'
import CartBtn from './Button/Cartbtn'

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid py-2">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">About us </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">products</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">contact</NavLink>
              </li>
             


</ul>


          </div>
          <NavLink className="navbar-brand mx-auto fw-bold display-flex "  to="/" >Manu shops</NavLink>
          <Login/>
          <Signup />
          <CartBtn/>

        </div>
      </nav>

    </>


  )
}

export default Header
