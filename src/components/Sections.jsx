import React, { Component } from 'react';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

class Sections extends Component {
    render() { 
        const {sections} = this.props
            return (
            <React.Fragment>
                <About about={sections.about}/>
                <Projects featured={sections.featured} projects={sections.projects}/>
                <Contact/>
            </React.Fragment>

         );
    }
}
 
export default Sections;