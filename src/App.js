import Login from "./Components/Login.js";
import GlobalStyle from "./Styles/GlobalStyles.js";
import { BrowserRouter,Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />}/>
        </Routes>
        </BrowserRouter>
        </>
        )
    
}