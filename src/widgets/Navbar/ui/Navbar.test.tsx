import {render, screen} from "@testing-library/react";
import {Navbar} from "widgets/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';

describe('navbar test', () => {
    test('search by text', () => {
        render(
            <Router>
                <Navbar />
            </Router>)
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})
