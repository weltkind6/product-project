import {Suspense, useState} from 'react'
import {AppRouter} from 'app/providers/router'
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'helpers/classNames/classNames'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
