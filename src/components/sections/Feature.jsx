import React, { Component } from 'react';
import shot from '../../styles/img/night_shot.jpg';

const Feature = (props) => {
    const {featured} = props
    return ( 
    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
    <div className="col-xl-8 col-lg-7">
        <img className="img-fluid mb-3 mb-lg-0" src={shot} alt=""></img>
    </div>
    <div className="col-xl-4 col-lg-5">
        <div className="featured-text text-center text-lg-left">
            <h4>{featured.title}</h4>
            <p className="text-black-50 mb-0">
                {featured.desc}
            </p>
        </div>
    </div>
    </div> );
}
 
export default Feature;
/*
class Feature extends Component {
    state = {  }
    render() { 
        const {featured} = this.props
        return ( 
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7">
                        <img className="img-fluid mb-3 mb-lg-0" src={shot} alt=""></img>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>{featured.title}</h4>
                            <p className="text-black-50 mb-0">
                                {featured.desc}
                            </p>
                        </div>
                    </div>
                    </div>
         );
    }
}
 
export default Feature;
*/