import {render, screen} from "@testing-library/react";
import {Navbar} from "widgets/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import {renderWithTranslation} from "lib/tests/renderWithTranslation/renderWithTranslation";

describe('navbar test', () => {
    test('search by text', () => {
        renderWithTranslation(
            <Router>
                <Navbar />
            </Router>
        )
        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})
