import axios from "axios";
import { useEffect,useState } from "react";
import styled from "styled-components";
import Book from "../book/Book";
import{ SelfBuildingSquareSpinner} from 'react-epic-spinners';
import data from "../data/data";
import { Link } from "react-router-dom";



export default function HomePage()
{  
    
      return(
          <>
          <Header><a href="/">Castelo<br/> dos<br/> livros</a></Header>
          <Container>
              <h1>O que você deseja ler hoje?</h1>
           <Posters>
            {
              data.books.map(book =>(
              <Hlink to={`book/${book.slug}`}>
              <Card>
                <img src={book.image} alt={book.name}></img>
                <h3>{book.name}</h3>
                <p>R$ {book.price}</p>
              </Card>
              </Hlink>))
            }
           </Posters>
           </Container>
          </>
      )
}
const Header=styled.header`
background-color: #F46C6C;
padding: 3rem;
justify-content: center;
align-items: center;
text-align: center;
a {
  color: white;
  text-align:left;
  font-style: normal;
  font-family: 'Lexend Deca', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 45px;
  text-decoration: none;
}
`

const Container = styled.div`
margin: 70px 30px;

justify-content: center;margin: 70px 30px;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    
    height: 110px;
    left: 0px;
    top: 67px;

    top: 67px;
    font-family: 'Lexend Deca', sans-serif;
    color: black;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: left;
    letter-spacing: 0.04em;

color: #293845;

  }
`
const Posters = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
const Card = styled.div`
width: 135px;
height: 255px;
padding: 6px;
margin: 6px;
align-items: center;
background-color: white;
justify-content: center;
color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 23px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 14px;
text-align: center;
text-decoration: none;
h3
{
  
  color: #F46C6C;
  text-decoration: none;
}
p {
  
  color: #787878;
  font-size: 10px;
}

img
{
  width: 112px;
height: 168px;
  border-radius: 20px;
  margin-top: 10px;
}
`
const Hlink = styled(Link)`
  text-decoration-line: none;

`