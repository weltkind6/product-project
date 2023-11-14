import App from "./app/App";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import 'shared/config/i18n/i18n'

render(
    <BrowserRouter>
        <div>
           <ThemeProvider>
               <App />
           </ThemeProvider>
        </div>,
    </BrowserRouter>,
    document.getElementById('root')
)

