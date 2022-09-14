import styled from "styled-components"

export default function Login(){
    return(
    <Content>
        <HeaderContent>
            <h2>Já tem uma conta?</h2>
            
        </HeaderContent>
    </Content>)
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background: #F46C6C;
    border-radius: 22px;
    color: white;
    font-size: 22px;

    h4 {
        padding: 20px
    }
`