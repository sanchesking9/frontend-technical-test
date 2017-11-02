import React, { Component } from 'react';
import {Header, Burger, Selected, Close} from './styles';
import SidebarList from '../SidebarList';

export class Sidebar extends Component {
  state = {
    open: false
  };

  _onClick = () => {
    this.setState({open: !this.state.open});
  };

  render() {
    return <div>
      <Header>
        <Burger onClick={this._onClick} />
      </Header>
      <Selected open={this.state.open}>
        <Close onClick={this._onClick} />
        <SidebarList />
      </Selected>
    </div>;
  }
}

export default Sidebar;
