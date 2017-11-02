import { SELECT, UNSELECT } from "../actions/selections";

const initialState = {};

export default function selections(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      state[action.selectionId] = action.marketId;
      return Object.assign({}, state);
    case UNSELECT:
      const result = {...state};
      delete result[action.selectionId];
      return Object.assign({}, result);
    default:
      return state;
  }
}
