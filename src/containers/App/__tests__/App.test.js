import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import {App} from '../App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../../reducers/index';

describe("test", () => {
  it('renders without crashing', () => {
    const store = createStore(reducers, applyMiddleware(thunk));
    const rootComponent = mount(<div />);
    const rootNode = ReactDOM.findDOMNode(rootComponent.instance());
    ReactDOM.render(<Provider store={store}><App getData={() => {}} /></Provider>, rootNode);
    expect(rootComponent.children.length).toBe(1);
  });
});
