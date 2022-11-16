import App from "../../App"
import ReactDOM from "react-dom"
it("show comment box", () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    expect(div.innerHTML).toContain("CommentList");
    ReactDOM.unmountComponentAtNode(div)
})