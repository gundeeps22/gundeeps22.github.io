import styled from 'styled-components';

const CircleGrid = styled.div`
    display: grid;
    grid-template-columns: 10px 75px 10px;
    grid-template-rows: auto;
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
    background: blue;
    border-radius: 50%;
    box-shadow: ${props => props.highlight ? "0 0 0 10px white" : "0 0 0 0 white"};
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

export function Circle(props){
    return (
        <CircleGrid>
            <CircleShape onClick={props.onPress} highlight={props.isSelected}>
                <CircleImage src="https://play-lh.googleusercontent.com/_qTb7fdtj18tYn1AyKLX1-kGvhzgJctx9sHpxk95ktK0hn9ruGnkJZCRp39Asp1kG4A=s180-rw" />
            </CircleShape>
            <CircleCaption>Bloomberg</CircleCaption>
        </CircleGrid>

    );
}