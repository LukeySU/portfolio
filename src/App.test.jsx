import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  const heading = screen.getByRole('heading', { name: /Reliable systems/i })
  expect(heading).toBeInTheDocument()
})
