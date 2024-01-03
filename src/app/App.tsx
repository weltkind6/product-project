import {Suspense, useState} from 'react'
import {AppRouter} from 'app/providers/router'
import {useTheme} from 'app/providers/ThemeProvider'
import {classNames} from 'helpers/classNames/classNames'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {Modal} from "shared/ui/Modal/Modal";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme()

    const [isOpen, setIsOpen] = useState(false);
    const closeHandler = () => {
        return setIsOpen(false)
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <Modal isOpen={isOpen} onClose={closeHandler}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores aut autem dolore
                    dolores esse exercitationem laboriosam minus odio quaerat qui quidem, tempore! Fugiat molestiae nisi
                    tempore, totam ullam vel?
                </Modal>
                <button onClick={() => setIsOpen(true)}>open</button>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
