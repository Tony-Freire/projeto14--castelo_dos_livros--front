import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data/data";



export default function Saved()
{  
    
      return(
          <>
          <Container>
              <h1>Saved</h1>
           <Posters>
            {
              data.books.map(book =>(
              <Hlink to={`book/${book.slug}`}>
              <Card>
                <img src={book.image} alt={book.name}></img>
                <Descrption>
                <h3>{book.name}</h3>
                <h5>{book.author}</h5>
                <p>{book.description}</p>
                </Descrption>
              </Card>
              </Hlink>))
            }
           </Posters>
           </Container>
          </>
      )
}

const Container = styled.div`
margin: 40px 30px;

justify-content: center;margin: 40px 30px;

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
width: 300px;
height: 200px;
padding: 6px;
margin: 6px;
display:flex;

align-items: center;
background-color: white;
justify-content: center;
color: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 23px;
font-family: 'Lexend Deca', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 14px;
text-align: center;
text-decoration: none;
h3
{
  
  color: #F46C6C;
  text-decoration: none;
  margin-bottom: 5px;
}

h5 {
    color: #F46C6C;
    font-weight:400;
}
p {
  
  color: #787878;
  font-size: 10px;
  font-weight: 400;
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

const Descrption = styled.div`
    width:100%;
    margin-left:5px;
`