import React from 'react';
import ReactDOM from 'react-dom';

// Libs
import Typist from 'react-typist';
import { Parallax } from 'react-parallax';

// assets (images)
import parallaxBackground from './assets/images/parallaxBackground.jpg';

// Components
import Project from './components/Project';

import { 
  Jumbotron, 
  Container,
  Row,
  Col,
  Figure
} from 'react-bootstrap';

import {
  ArrowBarDown
} from 'react-bootstrap-icons';


// const COLORS = {
//   dark: "rgba(44, 44, 46, 0.9)",
//   light: "rgba(229, 229, 234, 0.9)"
// }


export default function App() {
  return (
      <Parallax
            blur={7}
            bgImage={parallaxBackground}
            bgImageAlt="the cat"
            strength={750}
            style={{paddingTop: "16px"}}
        >
          <Container className={"d-flex align-itmes-center justify-content-center flex-column"} style={{height: window.innerHeight}}>
              <Jumbotron className={"text-center theme-dark"}>
                <h1><Typist>Welcome to my Portfolio!</Typist></h1>
                <p><Typist startDelay={1600}>Scroll down to see my projects!</Typist></p>
                <ArrowBarDown size={"24"} />
              </Jumbotron>
          </Container>

          <Jumbotron className={"theme-dark"} id={"completed-section"}>
            <Container>
              <h2 className={" section-title pb-3 mb-3"}>Completed</h2>
              <Row >
                <Col md="4">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"dark"}
                    />
                </Col>
                <Col md="4">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"dark"}
                    />
                </Col>
                <Col md="4">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"dark"}
                    />
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron className={"theme-dark"} id={"ongoing-section"}>
            <Container>
              <h2 className={"section-title pb-3 mb-3"}>Ongoing</h2>
              <Row >
                <Col md="4">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"dark"}
                    />
                </Col>
                <Col md="4">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"dark"}
                    />
                </Col>
                <Col md="4">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"dark"}
                    />
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          

        </Parallax>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


/* <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron> */