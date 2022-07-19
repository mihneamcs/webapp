import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a href='#' class="navbar-brand">
                <img class="logo" src='https://upb.ro/wp-content/uploads/2017/11/LOGO-SITE_400x100_2018_v2.png'/>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse container-fluid" id="navmenu">
                    <ul class="navbar-nav ms-auto text-warning">
                        <li class="nav-item">
                            <Link className='nav-link' to ="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/programare" class="nav-link">Secretariat</Link>
                        </li>
                        <li class="nav-item">
                        <Link className='nav-link' to ="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar