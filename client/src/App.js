import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const midIndex = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, midIndex);
  const secondHalf = data.slice(midIndex);

  return (
    <Container>
        <Row>
            <Col md="6"><img src="images/photo.png" alt="Python logo"></img></Col>
            <Col>
                <h1>Stephen Wanhella</h1>
                <p className="info">Hi, I'm Stephen! I'm a software engineer specializing in Python and Web Development.
                    I graduated from Simon Fraser University in 2021 with a Bachelor of Science degree majoring in Computer Science.
                    I have worked for several companies including Elastic Path and LearningBranch (now HiringBranch) on ECommerce and
                    Learning platforms.
                </p>
            </Col>
        </Row>
        <Row>
          <Col>
            <p>Below you can find some of the apps I have built in Python. Feel free to contact me!</p>
          </Col>
        </Row>
        <Row>
            <Col md="6">
              {firstHalf.map((item, index) => (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <img src={'images/' + item.image} alt={item.title} />
                  <a href={item.url}>Source Code</a>
                </div>
              ))}
          </Col>
          <Col>
                {secondHalf.map((item, index) => (
                <div key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <img src={'images/' + item.image} alt={item.title} />
                  <a href={item.url}>Source Code</a>
                </div>
              ))}
          </Col>
        </Row>
    </Container>
  );
}

export default App;