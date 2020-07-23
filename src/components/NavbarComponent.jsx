import React, { Component } from 'react';
import home from "../styles/img/home_logo.png"
class Navbar extends Component {
    
    render = () => { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="logo"src={home}></img>
                </a>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;