import React, { Component } from 'react'
import { connect } from 'react-redux';

export class CommentList extends Component {
  getComment() {
    return this.props.comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  }
  
  render() {
    return (
      <div>
        <h1>comments</h1>
        <ul>
          {this.getComment()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return { comments: state.Comments };
}
export default connect(mapStateToProps)(CommentList)