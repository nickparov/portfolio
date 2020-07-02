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
              </Jumbotron>
          </Container>

          <Jumbotron className={"theme-dark"}>
            <Container>
              <Row >
                <Col md="2" className={"d-flex flex-column justify-content-center align-items-center left-rounded theme-light"}>
                    <h4>Completed</h4>
                </Col>
                <Col md="5">
                    <Project 
                      title={"Course Tracker"} 
                      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quidem."}  
                      progress={"100"} 
                      color={"light"}
                    />
                </Col>
                <Col md="5">
                    <Figure style={{margin: "0px", position: "relative"}}>
                      <Figure.Image
                        style={{margin: "0px"}}
                        fluid
                        rounded
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                      />
                      <div className="figure-cover">
                        <p className={"text-center"}>Course Tracker</p>
                      </div>
                    </Figure>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron className={"theme-dark"}>
            <Container>
              <Row >
                <Col md="5">
                    <Figure style={{margin: "0px", position: "relative"}}>
                      <Figure.Image
                        style={{margin: "0px"}}
                        fluid
                        rounded
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                      />
                      <div className="figure-cover">
                        <p className={"text-center"}>Course Tracker</p>
                      </div>
                    </Figure>
                </Col>
                <Col md="5">
                    <Figure style={{margin: "0px", position: "relative"}}>
                      <Figure.Image
                        style={{margin: "0px"}}
                        fluid
                        rounded
                        alt="171x180"
                        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
                      />
                      <div className="figure-cover">
                        <p className={"text-center"}>Course Tracker</p>
                      </div>
                    </Figure>
                </Col>
                <Col md="2" className={"d-flex flex-column justify-content-center align-items-center right-rounded theme-light"}>
                    <h4>Ongoing</h4>
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