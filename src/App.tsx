import React, {Suspense} from 'react';
import { Counter } from "./components/Counter/Counter";
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";
import './styles/index.scss'
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, themeToggle} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={themeToggle}>Toggle theme</button>
            <button><Link to={'/'}>Main</Link></button>
            <button><Link to={'/about'}>About</Link></button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainAsync />}/>
                    <Route path="about" element={<AboutAsync />}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};

export default App;
