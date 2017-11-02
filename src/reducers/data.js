import {SET_DATA} from '../actions/data';

const initialState = {
  entities: {}
};

export default (state = initialState, action) => {
  if (action.type === SET_DATA) {
    return {entities: action.data};
  }
  return state;
};
