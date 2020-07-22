import React, { Component } from 'react';
import Project from './Project';
import Feature from './Feature';

class Projects extends Component {
    render() { 
        const {featured} = this.props
        const {projects} = this.props
        console.log(projects)
        return (
            <React.Fragment>
            <section className="projects-section bg-light">
                <div className="container">
                    <Feature featured={featured}/>
                    {projects.map(project =>(
                        <Project key= {project.id} projectId={project.id}title={project.title} desc={project.desc} image={project.image}/>
                    ))}
                </div>
            </section>
            </React.Fragment>
            
         );
    }
}
 
export default Projects;