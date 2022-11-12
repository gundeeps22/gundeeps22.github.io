import React from 'react';
import styled from 'styled-components';
import { useTransition } from 'react-spring';
import { Link } from '@reach/router';
import resume from '../files/resume-gundeep-singh.pdf';

const Nav = styled.div`
  width: 100%;
`;
 
const NavHeader = styled.div`
  padding: 26px 20px;
  margin: 0% 10%;
  display: grid;
  align-items: center;
  grid-template-columns: 60% 40%;
  grid-template-areas:
      "title nav-links"
`;
 
const NavTitle = styled.h2`
  grid-area: title;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: white;
`;

const NavLinks = styled.div`
  grid-area: nav-links;
  display: flex;
  flex-direction: row;
  color: white;
  column-gap: 10%;
`;
 
const MenuLink = styled(Link)`
  text-decoration: none;

  color: ${props => (props.to === window.location.pathname) ? "#9961bb" : "white"};

  &:hover {
    color: #cab3e6;
  }
`;

const ExternalMenuLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: #cab3e6;
  }

  &:active {
    color: #9961bb;
  }
`;
 
function Header(props) {

  const transitions = useTransition(props.show, {
    from: { opacity: 0, position: 'relative' },
    enter: { opacity: 1, position: 'relative' },
    leave: { opacity: 0, position: 'absolute' },
    reverse: props.show
  });

  return transitions(
    (styles, item) => item && (
      <Nav style={styles}>
        <NavHeader>
          <NavTitle>Hi, I'm Gundeep!</NavTitle>
          <NavLinks>
            <MenuLink to="/projects">Projects</MenuLink>
            <MenuLink to="/about">About Me</MenuLink>
            <ExternalMenuLink href="https://medium.com/">Blog</ExternalMenuLink>
            <MenuLink to="/instafeed">Insta</MenuLink>
            <ExternalMenuLink href={resume}>Resume</ExternalMenuLink>
            <MenuLink to="/about#contactinfo">Contact</MenuLink>
          </NavLinks>
        </NavHeader>
      </Nav>
    )
  )
}
 
export default Header;