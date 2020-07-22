import React from 'react';

const About = (props) => {
    const {about} = props
    return ( 
        <section className="about-section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h2 className="text-white mb-4">{about.title}</h2>
                        <p className="text-white-50">
                        {about.desc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;