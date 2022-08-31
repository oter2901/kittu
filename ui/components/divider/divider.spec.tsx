import React from 'react';
import { render } from '@testing-library/react';
import { BasicDivider } from './divider.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDivider />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
