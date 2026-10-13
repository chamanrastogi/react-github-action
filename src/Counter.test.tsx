
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Counter from './Counter'

describe('Counter Component', () => {
  it('renders the counter heading', () => {
    render(<Counter />)

    expect(
      screen.getByRole('heading', { name: 'Counter' })
    ).toBeInTheDocument()
  })

  it('starts with count zero', () => {
    render(<Counter />)

    expect(screen.getByText('Count: 0')).toBeInTheDocument()
  })

  it('increments the count when clicked', async () => {
    const user = userEvent.setup()

    render(<Counter />)

    await user.click(
      screen.getByRole('button', { name: 'Increment' })
    )

    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})
