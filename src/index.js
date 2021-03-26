import React from 'react';
import ReactDOM from 'react-dom';
import {image} from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => (
  <div className='ui container comments'>
    <ApprovalCard>
      <CommentDetail comment='gg wp' avatar={image.avatar()} author='Harley' timeAgo='Today at 2:30PM'/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail comment='awesome blog!!!' avatar={image.avatar()} author='King Shark' timeAgo='Today at 4:45PM'/>
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail comment='Nice going' avatar={image.avatar()} author='Sam' timeAgo='Today at 3:15PM'/>
    </ApprovalCard>
  </div>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
