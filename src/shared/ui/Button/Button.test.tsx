import { Button } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('test', () => {
  test('some test', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
