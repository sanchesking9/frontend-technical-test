import React from 'react';
import {mount} from 'enzyme';
import {ListItem} from '../ListItem';
import {MOCK} from "../../../../../configs/__mocks__/store";

describe("test ListItem component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ListItem data={MOCK.data} item={MOCK.item} />);
  });
  it('try to render component', () => {
    expect(wrapper.find(ListItem).length).toBe(1);
  });
});
