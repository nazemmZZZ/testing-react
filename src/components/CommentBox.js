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
      <form onSubmit={ this.handleSubmit}>
        <h4>add comment</h4>
        <textarea value={this.state.Comment} onChange={ this.handleChange} />
        <div>
          <button>submit</button>
        </div>
        </form>
    );
  }
}
export default connect(null,action) (Commentbox)