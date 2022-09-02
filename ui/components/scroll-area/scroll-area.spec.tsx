import React from 'react';
import { render } from '@testing-library/react';
import { BasicScrollArea } from './scroll-area.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicScrollArea />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
