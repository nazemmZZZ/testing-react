import { mount } from "enzyme";
import Root from "../../Root";
import CommentList from "../CommentList";
import React from "react";

let wrapper;
const initialState = {
    Comments: ["ho", "hi", "hoooo"],
    };
beforeEach(() => {
  
    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
});
it("one li per comment", () => {
    expect(wrapper.find("li").length).toEqual(3);
})

it("check all text is same", () => {
    initialState.Comments.forEach((comment) => {
        expect(wrapper.render().text()).toContain(comment)
    })
})