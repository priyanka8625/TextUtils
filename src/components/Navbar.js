import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body`} data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li> */}
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`} onClick={props.toggleMode}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}
//defining the types of proptypes to avoid unnecessary bugs in future
Navbar.propTypes = {
    title: PropTypes.string.isRequired,//isRequired to avoid getting undefined props
    aboutText: PropTypes.string.isRequired
}
//Warning: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead. 
// Navbar.defaultProps = {
//     title: "Your Title Here",
//     aboutText: "About text here"
// }