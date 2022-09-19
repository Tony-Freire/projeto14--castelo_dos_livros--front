import GlobalStyle from "./../Styles/GlobalStyles.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import Login from "./login/Login.js";
import Sign from "./sign/Sign.js";

export default function App()
{
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sign" element={<Sign />}/>
        </Routes>
        </BrowserRouter>
        </>
        )
}