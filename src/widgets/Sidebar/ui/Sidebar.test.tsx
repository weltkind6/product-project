import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from "widgets/Sidebar";
import {renderWithTranslation} from "lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar test', () => {
    test('with only one param', () => {
        renderWithTranslation(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar />)
        const btnToggle = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(btnToggle)
        expect(screen.getByTestId('sidebar')).toHaveClass('isCollapsed')
    })
})
