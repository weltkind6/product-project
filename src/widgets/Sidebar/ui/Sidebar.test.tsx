import {render, screen} from '@testing-library/react'
import {Sidebar} from "widgets/Sidebar";

describe('Sidebar test', () => {
    test('with only one param', () => {
        render(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
