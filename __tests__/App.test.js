import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../src/App'

test('Checking price', () => {
  render(<App />)
  const button = screen.getByRole('button')
  expect(button).toBeEnabled()
})
