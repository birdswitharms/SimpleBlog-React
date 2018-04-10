import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>{this.props.title}</h1>
          <h2>By: {this.props.author}</h2>
          <h3>{this.props.body}</h3>
          <br/>
          <h2>Comments:</h2>
          <h3>{this.props.comments[0]}</h3>
          <h3>{this.props.comments[1]}</h3>
          <h3>{this.props.comments[2]}</h3>
        </center>
      </div>
    );
  }
}

export default Post;
