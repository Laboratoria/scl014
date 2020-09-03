import React from 'react';
import './Page.css';

const Page = (props) => (
  <div
    className="Page"
    style={{
      color: props.color,
      backgroundColor: props.bgColor,
    }}
    onClick={props.onClick}
  >
    {props.text}
  </div>
);

export default Page;