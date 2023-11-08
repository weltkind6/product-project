import React from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, themeToggle} = useTheme();

    return (
        <div className={classNames
        ('app',
            {},
            [theme])}>
            <button onClick={themeToggle}>Toggle theme</button>
            <button><Link to={'/'}>Main</Link></button>
            <button><Link to={'/about'}>About</Link></button>
            <AppRouter />
        </div>
    );
};

export default App;
