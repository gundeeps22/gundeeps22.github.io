import styled from "styled-components";
import underConstruction from '../images/under_construction.png'
import Header from "./Header";

const Main = styled.div`
  text-align: center;
  background: url(${underConstruction}) no-repeat center center fixed;
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Inter', sans-serif;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: 'flex';
  width: 100vw;
  height: 100vh;
  flex-direction: 'column'
`

function TBD() {
  return (
    <Main>
      <Header show={true} />
    </Main>
  )
}

export default TBD;