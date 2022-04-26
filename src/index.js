import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrey" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valery" },
];

const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "qq" },
  { id: 4, message: "Try hard" },
  { id: 5, message: "Hello my friend" },
  { id: 6, message: "Good idea!" },
];

const postData = [
  {id: 0, message: 'Hi, how are you?', like: 23},
  {id: 1, message: 'My first post.', like: 4}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogs} message={messages} post={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
