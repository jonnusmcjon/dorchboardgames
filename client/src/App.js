import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, CardBody, CardImg, Row, Col, Container } from 'reactstrap';
import { Image, StyleSheet, View } from "react-native";
import './App.css';
import axios from 'axios';

import bannerUri from "./images/bannerimage.jpg";

const styles = StyleSheet.create({
  heroHeaderImage: {
    height: 80,
    width: 100
  }
});

class App extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div>
      <div className="AppHeader">
        <img src={bannerUri} className="AppHeaderImage"/>
        <h1 className="App">Dorchester Board Games</h1>
        </div>
      <div  className="AppBody">
      <Container className="themed-container">
        <Row xs="10">
          {/* First Card */}
          <Col xs="12" sm="6" md="4">
            <Card body outline color="primary">
              <CardBody>
                <CardTitle tag="h3">What?</CardTitle>
                <CardText>We're a group of board gamers based in Dorchester, UK who meet up on a weekly basis at our friendly pub to play and share some of our favourite games.</CardText>
                <Button color="secondary">Button</Button>
              </CardBody>
              <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            </Card>
          </Col>
          {/* Second Card */}
          <Col xs="12" sm="6" md="4">
            <Card body outline color="primary">
              <CardBody>
                <CardTitle tag="h3">How?</CardTitle>
                <CardText>We all bring along a game or two (or five!) to play, and form into groups to play them.<br/><br/>

Check out our library of games to see what we've played (or want to play!)</CardText>
                <Button color="secondary">Library</Button>
              </CardBody>
              <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            </Card>
          </Col>
        </Row>
      </Container>
      <div><h1>{this.state.response.body}</h1></div>
      </div>
      <small>Copyright jonnus-2021</small>
      </div>
    );
  }
}

export default App;