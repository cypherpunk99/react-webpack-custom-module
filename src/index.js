import React from 'react';
import ReactDOM from 'react-dom';
import ReactColorSquare from 'react-color-square';

ReactDOM.render(
  <ReactColorSquare height={150} color="red" text="Hello World!" />,
  document.getElementById('app')
);

module.hot.accept();