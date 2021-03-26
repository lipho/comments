import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import {image} from "faker";

const App = () => (
  <div className='ui container comments'>
    <CommentDetail comment='Nice going' avatar={image.avatar()} author='Sam' timeAgo='Today at 3:15PM'/>
    <CommentDetail comment='gg wp' avatar={image.avatar()} author='Harley' timeAgo='Today at 2:30PM'/>
    <CommentDetail comment='awesome blog!!!' avatar={image.avatar()} author='King Shark' timeAgo='Today at 4:45PM'/>
  </div>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
