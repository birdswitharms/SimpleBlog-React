import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: 'Dinosaurs are awesome',
  author: 'Mr. Stegosaurus',
  body: 'Check out this awesome post!',
  comments: [
    'First!',
    'Great post.',
    'Hire this author!'
  ]
}

ReactDOM.render(<App
  title={post.title}
  author={post.author}
  body={post.body}
  comments={post.comments}
  />, document.getElementById('root'));
registerServiceWorker();
