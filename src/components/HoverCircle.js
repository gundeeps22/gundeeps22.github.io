import styled from 'styled-components';
import { CircleGrid, CircleShape, CircleCaption } from './BaseCircle';
import { Link } from '@reach/router';

const HoverCircleIcon = styled.span`
  color: #9961bb;
  font-size: 30px;
`;

const HoverCircleShape = styled(CircleShape)`
  &:hover{
    box-shadow: 0 0 0 5px white;
    cursor: pointer
  }

  &:hover ${HoverCircleIcon} {
    color: white;
    cursor: pointer;
  }
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

const ExternalLinkWrapper = styled.a`
  text-decoration: none;
`;

const HoverCircle = (props) => {
  return (
    <LinkWrapper to={props.to}>
        <CircleGrid>
          <HoverCircleShape>
              <HoverCircleIcon className='material-symbols-outlined'>{props.type}</HoverCircleIcon>
          </HoverCircleShape>
          <CircleCaption>{props.name}</CircleCaption>
      </CircleGrid>
    </LinkWrapper>
  );
}

export const ExternalHoverCircle = (props) => {
  return (
    <ExternalLinkWrapper href={props.to}>
        <CircleGrid>
          <HoverCircleShape>
              <HoverCircleIcon className='material-symbols-outlined'>{props.type}</HoverCircleIcon>
          </HoverCircleShape>
          <CircleCaption>{props.name}</CircleCaption>
      </CircleGrid>
    </ExternalLinkWrapper>
  )
}

export default HoverCircle;
