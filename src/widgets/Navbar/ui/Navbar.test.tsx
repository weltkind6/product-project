import {render, screen} from "@testing-library/react";
import {Navbar} from "widgets/Navbar";

describe('navbar test', () => {
    test('search by text', () => {
        render(<Navbar />)
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})
