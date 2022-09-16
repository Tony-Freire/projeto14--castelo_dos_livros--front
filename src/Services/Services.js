import axios from "axios";

const BASE_URL = 'https://castelo-dos-livros.herokuapp.com';

function authetication(){
    const aut = JSON.parse(localStorage.getItem('token'))
    const config = {
        headers: {
            Authorization: `Bearer ${aut}`
        }
    }

    return config
}

function postLogin(logForm){
    const promisse = axios.post(`${BASE_URL}/sign-up`, logForm)
    return promisse;
}

export { postLogin }