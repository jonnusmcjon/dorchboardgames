import React, { Component } from 'react';
import { Image, StyleSheet, View } from "react-native";
import './index.css';
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
      <div className="App">
        <Image
          accesibilityLabel="Site Banner"
          source={{uri: bannerUri}}
          resizeMode="contain"
          style={styles.heroHeaderImage}
        />
        <h1>Here is our new feature!</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;