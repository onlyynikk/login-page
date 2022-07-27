import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css.map'

function NavBar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            ATools<span className="highlighter">.</span>
          </span>

          <span className="nav-bar-btn">
            <button type="button" className="btn btn-color1">
              Start Free Trail
            </button>
            <button type="button" className=" btn btn-color2 ">
              Login
            </button>
          </span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

// F:\NIKHILESH\React projects\login-page-react\node_modules\bootstrap\dist\css\bootstrap.min.css.map
