import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss'

const App = () => {
    const {theme, themeToggle} = useTheme();

    return (
        <div className={classNames
        ('app',
            {},
            [theme])}>
            <Navbar />
            <button onClick={themeToggle}>Toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default App;
