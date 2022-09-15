import GlobalStyle from "./../Styles/GlobalStyles.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";


export default function App()
{
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        </Routes>
        </BrowserRouter>
        </>
        )
}