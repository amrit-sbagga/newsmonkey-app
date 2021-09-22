import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link to="/">Home</Link></li>
                    {/* <li className="nav-item"><Link to="/about">About</a></li> */}
                    <li className="nav-item mx-2"><Link to="/business">Business</Link></li>
                    <li className="nav-item mx-2"><Link to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item mx-2"><Link to="/health">Health</Link></li>
                    <li className="nav-item mx-2"><Link to="/science">Science</Link></li>
                    <li className="nav-item mx-2"><Link to="/sports">Sports</Link></li>
                    <li className="nav-item mx-2"><Link to="/technology">Technology</Link></li>
  
                    {/* <li className="nav-item">
                        <Link to="/">Link</a>
                    </li> */}
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Categories
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/">Sports</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Politics</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/">Business</a>
                        </div>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="/">Disabled</a>
                    </li> */}
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
