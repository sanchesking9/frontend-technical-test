import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Item, Title, Markets, ButtonsWrapper, Button} from "./styles";
import Buttons from '../Buttons';

export class ListItem extends Component {
  render() {
    const {item, data, selections} = this.props;
    const selectionsStore = data.entities.selections;
    return <Item>
      <Title>{item.name}</Title>
      {item.markets.map(market => {
        return <div key={market}>
            <Markets>{data.entities.markets[market].name}</Markets>
            <Buttons market={market} list={data.entities.markets[market].selections} />
          </div>
      })}
    </Item>;
  }
}

export default connect(state => {
  const {data} = state;
  return {data};
})(ListItem);