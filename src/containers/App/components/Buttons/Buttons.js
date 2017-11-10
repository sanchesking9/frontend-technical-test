import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ButtonsWrapper, Button } from './styles';
import {select, unselect} from "../../../../actions/selections";

export class Buttons extends Component {
  _onClick = (item, market) => {
    const {selections} = this.props;
    if (selections[item]) {
      this.props.unselect(item);
    } else {
      this.props.select(item, market);
    }
  };

  render() {
    const {list, data, selections, market} = this.props;
    const selectionsStore = data.entities.selections;
    return <ButtonsWrapper>
      {list.length && list.map(item => {
        return <Button state={selections[item]} onClick={this._onClick.bind(this, item, market)} key={item}>
            {selectionsStore[item].name}<br/>{selectionsStore[item].price}
          </Button>
      })}
    </ButtonsWrapper>;
  }
}

export default connect(({data, selections}) => {
  return {data, selections};
}, {select, unselect})(Buttons);
