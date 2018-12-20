import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    color: 'rgba(233, 73, 73)',
    fontWeight: 'bold'
}

const HeaderNavLinks = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <h2 className="navbar-brand">Official App</h2>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink activeStyle={style} exact className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={style} className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeStyle={style} className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderNavLinks
