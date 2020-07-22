import React, { Component } from 'react';
import Navbar from './components/NavbarComponent'
import Footer from './components/FooterComponent'
import Header from './components/HeaderComponent';
import Sections from './components/Sections';
import demo_1 from './styles/img/demo-image-01.jpg';
import demo_2 from './styles/img/demo-image-02.jpg';


class App extends Component {
  state = {
    header:
    {
      headerTitle:'Welcome',
      headerText: 'It\'s a work in progress.',
    },
    sections:
    {
      about:
      {
        title: "Hello",
        desc: "My name is Amirul Lokman and I'm looking to grow my skills as a software engineer by working with your organisation. Take a look down below."
      },
      featured:
      {
        title:"Portfolio Site",
        desc: "This is my very own portfolio site I just created using React. I haven't deployed it yet, but soon."
      },
      projects:
      [
        {
          id: 1,
          title:"Project 1",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin odio. Donec sit amet arcu convallis, vulputate quam sit amet, mattis eros. Fusce cursus lacus eu augue semper, a blandit justo cursus. Aenean ut tincidunt urna, ac gravida sem. Nullam dapibus, tortor sed facilisis porta, leo dolor tincidunt est, in dictum nisl metus eget lorem. Fusce eleifend est eget lacus tincidunt porta.",
          image: demo_1
        },

        {
          id:2,
          title: "Project 2",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin odio. Donec sit amet arcu convallis, vulputate quam sit amet, mattis eros. Fusce cursus lacus eu augue semper, a blandit justo cursus. Aenean ut tincidunt urna, ac gravida sem. Nullam dapibus, tortor sed facilisis porta, leo dolor tincidunt est, in dictum nisl metus eget lorem. Fusce eleifend est eget lacus tincidunt porta.",
          image: demo_2
        },

        {
          id:3,
          title: "Project 3",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin odio. Donec sit amet arcu convallis, vulputate quam sit amet, mattis eros. Fusce cursus lacus eu augue semper, a blandit justo cursus. Aenean ut tincidunt urna, ac gravida sem. Nullam dapibus, tortor sed facilisis porta, leo dolor tincidunt est, in dictum nisl metus eget lorem. Fusce eleifend est eget lacus tincidunt porta.",
          image: demo_1
        }

      ]

    }
  }
  render() { 
    return (
      <React.Fragment>
        <Navbar/>
        <Header header={this.state.header}/>
        <Sections sections={this.state.sections}/>
        <Footer/> 
      </React.Fragment>
      
    );
  }
}
 
export default App;
