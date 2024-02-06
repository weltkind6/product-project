import {screen} from "@testing-library/react";
import {renderWithTranslation} from "lib/tests/renderWithTranslation/renderWithTranslation";
import { BrowserRouter as Router } from 'react-router-dom';
import {Navbar} from "widgets/Navbar";

describe('navbar test', () => {
    test('search by text', () => {
        renderWithTranslation(
            <Router>
                <Navbar />
            </Router>)
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})
