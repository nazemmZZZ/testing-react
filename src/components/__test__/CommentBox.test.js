import { mount } from "enzyme";
import React from "react";
import Commentbox from "../CommentBox";
let wrapper;
beforeEach(() => {
  wrapper = mount(<Commentbox />);
});
afterEach(() => {
  wrapper.unmount();
});
it("has text in text area", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
});
it("has text in text area", () => {
  expect(wrapper.find("button").length).toEqual(1);
});
it("is typeable ", () => {
    wrapper.find("textarea").simulate("change", { target: { value: "hi" } });
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("hi")
});
it("is subimtable ", () => {
  wrapper.find("textarea").simulate("change", { target: { value: "hi" } });
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("hi");
    wrapper.find("form").simulate("submit")
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
});
