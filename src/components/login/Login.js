import { useState } from "react";
import styled from "styled-components";
import { postLogin } from "../../Services/Services";


export default function Login(){
    const [formLog, setFormLog] = useState();

    function handleForm({name, value}){
        console.log(name, value)
        setFormLog({...formLog, [name]:value})
    }

    function sendForm(e){
        e.preventDefault()
        console.log(formLog)
        postLogin(formLog).then((res)=>{
            console.log(res.data)
        })
    }

    return(
    <Content>
        <HeaderContent>
            <h2>Tem uma conta?</h2>       
        </HeaderContent>
        <LoginContent>
            <h2>Faça Login:</h2>
            <FormLogin>
                <input type="text" placeholder="Username" name="username" onChange={(e) => handleForm({
                    name:e.target.name,
                    value:e.target.value
                })} />
                <input type="password" placeholder="Password" name="password" onChange={(e) => handleForm({
                    name:e.target.name,
                    value:e.target.value
                })} /> 
            </FormLogin>  
        </LoginContent>
        <Button onClick={sendForm} >Entrar</Button>
        <ToSign>Não possui cadastro? <span>Cadastre-se</span> agora!</ToSign>
    </Content>)
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Roboto';
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
    background: #F46C6C;
    border-radius: 22px;
    color: white;
    font-size: 22px;

    h2 {
        width:50%;
        padding: 10px;
        text-align: center;
    }
`

const LoginContent = styled.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    h2 {
        margin-bottom: 10px;
        font-family: 'Work Sans';
        font-weight: 500;
        font-style: normal;
        color: rgba(0, 0, 0, 0.63);
    }
`

const FormLogin = styled.form`
    display: flex;
    justify-content:flex-start;
    align-items: space-around;
    flex-direction:column;

    input {
        margin-top: 20px;
        padding:10px;
        height:40px;
        border:none;
        border-radius:10px;
        box-shadow: -4px 4px 18px 0px #00000047;
    }
`
const Button = styled.button`
    width:40%;
    height:40px;
    border:none;
    border-radius:10px;
    background: #F46C6C;
    color:#FFFFFF;
    margin-top: 40px;
`

const ToSign = styled.div`
    margin: 50px;
    width:90%;
    color:#969696;
    text-align:center;

    span {
        color:#000000;
    }
`