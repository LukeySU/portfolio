import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  const heading = screen.getByRole('heading', {
    level: 1,
    name: /Reliable systems/i,
  })
  expect(heading).toBeInTheDocument()
})
