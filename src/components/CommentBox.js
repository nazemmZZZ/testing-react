import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../actions";
 class Commentbox extends Component {
   state = { Comment: '' }
   handleChange = event => {
      this.setState({Comment: event.target.value})
   }
   handleSubmit = event => {
     event.preventDefault()
     this.props.saveComment(this.state.Comment)
     this.setState({ Comment:"" });
   }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>add comment</h4>
          <textarea value={this.state.Comment} onChange={this.handleChange} />
          <div>
            <button>submit</button>
          </div>
        </form>
        <button className='fetch-comments' onClick={this.props.fetchComments}>fetch comments</button>
      </div>
    );
  }
}
export default connect(null,action) (Commentbox)