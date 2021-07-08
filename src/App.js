import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Circle } from './components/Circle';
import { Experience } from './components/Experience';
import Header from './components/Header';
import './App.css';
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

const ShrinkingDiv = styled(animated.div)`
  display: flex;
  width: 100%;  
`;

const MarginLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0% 10%;
`;

function App() {
  const [isLarge, setIsLarge] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const shouldDivShrink = () => {
    console.log(`gothere, ${isLarge}`);
    if (isLarge) {
      setIsLarge(false);
    }
  }

  const updateAnimatingState = () => {
    console.log('got here');
    setIsAnimating(false);
  }

  const shrinkStyle = useSpring({
    config: config.molasses,
    from: { height: '100%' },
    to: { height: isLarge ? '100%' : '20%' },
    onStart: () => setIsAnimating(true),
    onRest: () => updateAnimatingState(),
  });



  return (
    <div className="App" style={{ display: 'flex', width: '100vw', height: '100vh', flexDirection: 'column' }}>
      <Header></Header>
      <ShrinkingDiv style={shrinkStyle}>
        <MarginLayout>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Circle onPress={() => shouldDivShrink()}></Circle>
            <Circle onPress={() => shouldDivShrink()}></Circle>
            <Circle onPress={() => shouldDivShrink()}></Circle>
            <Circle onPress={() => shouldDivShrink()}></Circle>
          </div>
        </MarginLayout>
      </ShrinkingDiv>
        { !isLarge && !isAnimating && <Experience /> }

    </div>
  );
}

export default App;
