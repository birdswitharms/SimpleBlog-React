import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './Author.js';
import Comment from './Comment.js';

class Post extends Component {
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />,
    ]

    let authors = [
      <Author author={this.props.allAuthors[0] }/>,
      <Author author={this.props.allAuthors[1] }/>,
      <Author author={this.props.allAuthors[2] }/>,
    ]

    return (
      <div>
        <center>
          <h1>{this.props.title}</h1>
          {authors}
          <br/>
          <h3>{this.props.body}</h3>
          <br/>
          <h2>Comments:</h2>
          {allComments}
        </center>
      </div>
    );
  }
}

export default Post;
