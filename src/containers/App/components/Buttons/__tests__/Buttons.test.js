import React from 'react';
import { mount } from "enzyme";
import { Buttons } from "../Buttons";
import {MOCK} from "../../../../../configs/__mocks__/store";
import {Button} from "../styles";

describe("test Buttons component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Buttons list={[1,2]} data={MOCK.data} selections={MOCK.selections} select={MOCK.select} unselect={MOCK.unselect}/>);
  });

  it('should correct render <Buttons />', () => {
    expect(wrapper.find(Buttons).length).toBe(1);
  });

  it('should contains list of <Button />', () => {
    expect(wrapper.find(Button).length).toBe(2);
  });

  it('should handle the click', () => {
    wrapper.find(Button).first().simulate('click');
    expect(MOCK.unselectedClick).toBe(1);
  });
});
