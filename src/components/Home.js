import React, { useState } from 'react';
import Title from './Title'
import '../App.css';
import styled from 'styled-components';
import HoverCircle, {ExternalHoverCircle} from './HoverCircle';
import resume from '../files/resume-gundeep-singh.pdf';

const MarginLayout = styled.div`
  display: flex;
  height: 100%;
  margin: 10% 10%;
  justify-content: space-evenly;
  
`;

function Home() {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <div className="App" style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column' }}>
      <Title show={true} handleCompletedTyping={() => setShowNavigation(true)}/>
      <MarginLayout>
        { showNavigation &&
          (
            <>
              <HoverCircle to='/about' type='person' name='About Me' />
              <HoverCircle to='/projects' type='code' name='Projects' />
              <ExternalHoverCircle to={resume} type='description' name='Resume' />
              <HoverCircle to='/about#contactinfo' type='contact_mail' name='Contact' />
            </>
          )
        }
      </MarginLayout>
    </div>
  );
}

export default Home;
