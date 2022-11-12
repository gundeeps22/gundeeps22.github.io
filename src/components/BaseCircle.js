import styled from 'styled-components';

const CircleGrid = styled.div`
  display: grid;
  grid-template-columns: 10px 80px 10px;
  grid-template-rows: 80px 70px;
  gap: 10% 0px;
  grid-template-areas:
      ". circle ."
      ". caption ."
`;

const CircleShape = styled.div`
  grid-area: circle;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  background: ${props => props.backgroundColor};
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  border-radius: 50%;
  box-shadow: ${props => props.highlight ? "0 0 0 5px white" : "0 0 0 0 white"};

  &:hover {
    box-shadow: 0 0 0 5px white;
  }
`;

const CircleCaption = styled.div`
  grid-area: caption;
  text-align: center;
  font-size: 1.5vh;
  color: white;
`;

const CircleImage = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export {CircleImage, CircleShape, CircleGrid, CircleCaption}