import React from "react";
import { BrowserRouter as Router, Switch,Routes, Route,Link } from "react-router-dom";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import * as action from "./actions";
import  { Component } from 'react'
import { connect } from "react-redux";
 class App extends Component {
  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
  }
  renderHeadeer = () => {
    return(
      <ul>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to="/post">Post comment</Link></li>
        <li>{this.renderButton() }</li>
      </ul>
    );
  }
  render() {
  return (
    <div className="App">
    {this.renderHeadeer()}
          <Route exact path="/post" component={CommentBox}></Route>
          <Route exact path="/" component={CommentList}></Route>
    </div>
  );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, action)(App);