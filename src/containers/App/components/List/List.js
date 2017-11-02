import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListWrapper} from "./styles";
import ListItem from '../ListItem';

class List extends Component {
  render() {
    const {events} = this.props.data.entities;
    return <ListWrapper>
      {events && Object.keys(events).map(item => {
        return (events[item].markets.length > 0) && <ListItem item={events[item]} key={item} />;
      })}
    </ListWrapper>;
  }
}

export default connect(state => {
  const {data} = state;
  return {data};
})(List);
