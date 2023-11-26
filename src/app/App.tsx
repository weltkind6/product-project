import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'helpers/classNames/classNames'
import React, { Suspense, useEffect } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error()
    }
  }, [])

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <Navbar />
              <div className="content-page">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  )
}

export default App
