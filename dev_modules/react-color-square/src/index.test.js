import React from 'react';
import renderer from 'react-test-renderer';

import ReactColorSquare from './index';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<ReactColorSquare height={150} color="red" text="Hello World!" />).toJSON();
  expect(tree).toMatchSnapshot();
});