import App from "../../App";
import React from "react";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";
let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});
it("show comment box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});
it("show comment list", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
