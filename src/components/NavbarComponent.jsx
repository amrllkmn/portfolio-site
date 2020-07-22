import React, { Component } from 'react';
class Navbar extends Component {
    
    render = () => { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <a className="navbar-brand" href="#">Home</a>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;