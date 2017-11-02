import React, { Component } from 'react';
import {getData} from '../../actions/data';
import { connect } from 'react-redux';
import {API_URL} from '../../configs/api';
import {Sildebar, List} from "./components/index";

export class App extends Component {
  componentDidMount() {
    this.props.getData(API_URL);
  }
  render() {
    return (
      <div>
        <Sildebar />
        <List />
      </div>
    );
  }
}

export default connect(() => {
  return {};
}, {getData})(App);
