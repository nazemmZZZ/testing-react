import { SAVE_COMMENT } from "../../actions/types"
import CommentReducer from "../Conmmet"
it('handel save comment', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: "new coop"
    }
    const newState = CommentReducer([], action)
    expect(newState).toEqual["new  pcoop"]
})