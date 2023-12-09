import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'
import '@testing-library/jest-dom/extend-expect'

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
