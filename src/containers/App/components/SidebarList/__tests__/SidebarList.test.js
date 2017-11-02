import React from 'react';
import { mount } from "enzyme";
import { SidebarList } from "../SidebarList";
import {Item, ButtonDelete} from '../styles';
import {MOCK} from "../../../../../configs/__mocks__/store";

describe("test SidebarList component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<SidebarList data={MOCK.data} selections={MOCK.selections} unselect={MOCK.unselect}/>);
  });
  it('should correct render <SidebarList />', () => {
    expect(wrapper.find(SidebarList).length).toBe(1);
  });

  it('should contains list of <Item />', () => {
    expect(wrapper.find(Item).length).toBe(2);
  });

  it('should handle the click', () => {
    wrapper.find(ButtonDelete).first().simulate('click');
    expect(MOCK.unselectedClick).toBe('1');
  });
});
