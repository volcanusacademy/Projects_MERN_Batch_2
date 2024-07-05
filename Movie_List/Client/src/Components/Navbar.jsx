import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className="nav_bar d-flex justify-content-between align-items-center p-2 bg-black" style={{position:"sticky", top:"0"}}>
            <div className="left"></div>
            <div className="right ">
                <Link to={'/'} className="items btn btn-info mx-3 ">Movies</Link>
                <Link to={'/addmovie'} className="items btn btn-danger mx-3 ">AddMovies</Link>
                <Link to={'/login'} className="items btn btn-success mx-3 ">Login</Link>
                <Link to={'/register'} className="items btn btn-danger mx-3 ">Register</Link>
                <div className="items btn btn-success mx-3 ">Logout</div>
            </div>
        </div>

    </>
  )
}

export default Navbar