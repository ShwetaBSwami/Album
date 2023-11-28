import React from 'react';
import { render, screen,act,waitFor } from '@testing-library/react';
import App from './App';
beforeEach(() => {
  (global as any).fetch = require('jest-fetch-mock');
  (global as any).fetch.resetMocks();
});

test('renders learn react link', async () => {
  (global as any).fetch.mockResponseOnce(JSON.stringify([{ id: 1, name: 'User 1' }]));

  await act(async () => {
    render(<App />);
  });
  await waitFor(() => {
    expect(screen.getByText("Users")).toBeInTheDocument();
});
  
});
