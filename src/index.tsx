import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ThemeProvider from "./theme/ThemeContext/ThemeProvider";

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

