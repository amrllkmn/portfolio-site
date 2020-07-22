import React, { Component } from 'react';

class Project extends Component {

    state = {  }
    render() { 
        console.log(this.props.image)
        return ( 
            <div className={this.getDivClass()[0]}>
                    <div className="col-lg-6"><img className="img-fluid" src={this.props.image} alt=""></img></div>
                    <div className={this.getDivClass()[1]}>
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">{this.props.title}</h4>
                                    <p className="mb-0 text-white-50">{this.props.desc}</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0"></hr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         );
    }

    getDivClass() {
        let cl = "row justify-content-center no-gutters";
        let col = "col-lg-6";
        cl += (this.props.projectId % 2 === 0) ? " " : " mb-5 mb-lg-0";
        col += (this.props.projectId % 2 === 0) ? " order-lg-first" : " ";
        return [cl,col];

    }

}
 
export default Project;