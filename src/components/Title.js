import { useTransition, animated } from 'react-spring'
import styled from 'styled-components';
import React from 'react';
import Typed from 'react-typed';


const TitleContent = styled(animated.div)`
  margin-top: 5%;
  font-size: 4vh;
  z-index: 1;
  position: relative;
  width: 100%;
  display: block;
  color: #e8dbf0;
  text-shadow: -2px 0 #9961bb, 0 2px #9961bb, 2px 0 #9961bb, 0 -2px #9961bb;
`;

function Title(props) {
    const transitions = useTransition(props.show, {
        from: { opacity: 0, position: 'relative' },
        enter: { opacity: 1, position: 'relative' },
        leave: { opacity: 0, position: 'absolute' },
        reverse: props.show,
    })
    return transitions(
        (styles, item) => item && (
            <TitleContent style={styles}>
                <h1>
                  <Typed
                    strings={['Hi, my name is Gundeep']}
                    typeSpeed={40}
                    showCursor={false}
                  />
                </h1>
                <Typed
                  strings={['Click on a circle to learn more about my experiences']}
                  typeSpeed={40}
                  showCursor={false}
                  startDelay={2000}
                  onComplete={() => props.handleCompletedTyping()}
                />
            </TitleContent>
        )
    )
}

export default Title;