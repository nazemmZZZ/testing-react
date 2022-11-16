import { mount } from "enzyme";
import moxios from 'moxios'
import React from "react";
import App from "../App";
import Root from "../Root";
const Comments= [{name:"ho"},{name: "hi"},{name: "hoooo"}]
beforeEach(() => {
    moxios.install()
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments",
        {
            status: 200,
            response:Comments
        });
})
afterEach(() => {
    moxios.uninstall()
})

it("can go to api", (done) => {
    const wrapper = mount(
        <Root>
            <App/>
        </Root>
    )
    wrapper.find(".fetch-comments").simulate("click");
    moxios.wait(() => {
        wrapper.update()
        expect(wrapper.find("li").length).toEqual(3);
        done();
        wrapper.unmount()
    });
})