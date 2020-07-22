import React, { Component } from 'react';

class Header extends Component {
    render = () => {
        const {header} = this.props
        return ( 
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">
                            {header.headerTitle}
                        </h1>
                        <h4 className="text-white-50 mx-auto mt-2 mb-5">{header.headerText}</h4>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;