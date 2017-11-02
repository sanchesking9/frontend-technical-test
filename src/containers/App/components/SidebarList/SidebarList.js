import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SidebarListWrapper, Item, Price, ButtonDelete} from "./styles";
import {unselect} from "../../../../actions/selections";

export class SidebarList extends Component {
  _onClick = (item) => {
    this.props.unselect(item);
  };

  render() {
    const {selections, data} = this.props;
    const {entities} = data;

    return <SidebarListWrapper>
      {Object.keys(selections).map(item => {
        return <Item key={item}>
            {entities.selections[item].name} {entities.markets[selections[item]].name}
            <Price>{entities.selections[item].price}</Price>
            <ButtonDelete onClick={this._onClick.bind(this, item)}>Delete</ButtonDelete>
          </Item>
      })}
    </SidebarListWrapper>;
  }
}

export default connect(state => {
  const {data, selections} = state;
  return {data, selections};
}, {unselect})(SidebarList);
