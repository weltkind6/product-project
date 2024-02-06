import {fireEvent, screen} from '@testing-library/react'
import {componentRender} from "lib/tests/componentRender/componentRender";
import {Sidebar} from "widgets/Sidebar";

describe('Sidebar test', () => {
    test('with only one param', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        componentRender(<Sidebar />)
        const btnToggle = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(btnToggle)
        expect(screen.getByTestId('sidebar')).toHaveClass('isCollapsed')
    })
})
