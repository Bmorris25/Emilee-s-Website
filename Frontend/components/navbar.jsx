import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar bg-opacity-25  navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">Pet-Styling</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
            <a className="nav-link text-white" href="/featured">Featured Products</a>
            <a className="nav-link text-white" href="/services">Services and Pricing</a>
            <a className="nav-link text-white" href="/contact">Contact</a>
            </div>
        </div>
        </div>
        </nav> 
    </div>
  )
}

export default Navbar

