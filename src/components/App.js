import GlobalStyle from "./../Styles/GlobalStyles.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import BookInfo from "./bookInfo/BookInfo.js";



export default function App()
{
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/book/:slug" element={<BookInfo />}/>
        </Routes>
        </BrowserRouter>
        </>
        )
}