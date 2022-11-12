import React, { useState, useEffect, createRef } from 'react';
import { Circle } from './Circle';
import { Experience } from './Experience';
import Header from './Header';
import '../App.css';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getAllExperiences } from '../features/experience/experienceSlice';
import projectBackground from '../images/project-background.png'


const Main = styled.div`
  text-align: center;
  background: url(${projectBackground}) no-repeat center center fixed;
  background-size: cover;
  background-attachment: fixed;
  font-family: 'Inter', sans-serif;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: 'flex';
  width: '100vw';
  flex-direction: 'column'
`

const MarginLayout = styled.div`
  display: flex;
  margin: 0% 5%;
`;

const LandingLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    "sidebar content";
  grid-template-columns: 12% 88%
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 5%;
  grid-area: sidebar;
  align-items: center;  
`;

const SidebarContents = styled.div`
  top: 10%;
  position: sticky;
  padding-top: 15%;
  padding-left: 5%;
  padding-right: 5%;
  border-radius: 20px;
  background: rgba( 0, 0, 99, .05 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 10px );
  -webkit-backdrop-filter: blur( 10px );
  overflow-y: auto;
  height: 80vh;
  &::-webkit-scrollbar{
    display: none;
  }
`

const Content = styled.div`
  grid-area: content;
  height: fit-content;
`;

function Landing() {
  const allExperiences = useSelector(getAllExperiences);
  const experienceRefs = Object.keys(allExperiences).reduce((refsObj, experienceName) => {
    refsObj[experienceName] = createRef();
    return refsObj;
  }, {});

  const [pageHeight, setPageHeight] = useState(100);

  useEffect(() => {
    setPageHeight(window.innerHeight);
    window.addEventListener('resize', (e) => {
      setTimeout(() => {
        setPageHeight(window.innerHeight);
      }, 300);
    });
  }, []);

  const scrollToExperience = (id) => {
    experienceRefs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }

  return (
    <Main>
      <Header show={true}/>
      <MarginLayout>
        <LandingLayout>
          <Sidebar>
            <SidebarContents>
              {
                Object.values(allExperiences).map(experience => (
                  <Circle key={experience.id} id={experience.id} onPress={scrollToExperience} />
                ))
              }
            </SidebarContents>
          </Sidebar>
          <Content>
            {
              Object.values(allExperiences).map( experience => (
                <Experience key={experience.id} reference={experienceRefs[experience.id]} experience={experience} pageLength={pageHeight} />
              ))
            }
          </Content>
        </LandingLayout>
      </MarginLayout>
    </Main>
  );
}

export default Landing;
