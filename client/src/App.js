import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <h1>MERN Stack Boilerplate</h1>
        </Container>
      </Provider>
    );
  }
}

export default App;
