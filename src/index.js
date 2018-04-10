import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: 'Dinosaurs are awesome',
  author: 'Mr. Stegosaurus',
  allAuthors: [
    'Stealthy Stegosaurus',
    'Tiny T-Rex',
    'Ivory Iguanodon',
  ],
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
  allAuthors={post.allAuthors}
  />, document.getElementById('root'));
registerServiceWorker();
