import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainAsync} from "pages/Main/Main.async";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {About} from "pages/About";
import './styles/index.scss'

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
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainAsync />}/>
                    <Route path="about" element={<About />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
