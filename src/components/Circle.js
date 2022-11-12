import { useSelector, useDispatch } from 'react-redux';
import { getAllExperiences, selectActiveExperience, updateActiveExperience } from '../features/experience/experienceSlice';
import { useState, useEffect } from 'react';
import { CircleGrid, CircleShape, CircleImage, CircleCaption } from './BaseCircle';

export function Circle(props){
  const activeExperience = useSelector(selectActiveExperience);
  const allExperiences = useSelector(getAllExperiences);
  const [highlightBoolean, setHighlightBoolean] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
      setHighlightBoolean(activeExperience && activeExperience.id === props.id);
  }, [activeExperience, props])

  const handleClick = () => {
      dispatch(updateActiveExperience(props.id))
      props.onPress(props.id);
  }

  return (
    <CircleGrid>
        <CircleShape onClick={() => handleClick()} highlight={highlightBoolean} backgroundColor={allExperiences[props.id].backgroundColor}>
            <CircleImage src={allExperiences[props.id].logo} />
        </CircleShape>
        <CircleCaption>{allExperiences[props.id].company}</CircleCaption>
    </CircleGrid>
  );
}

export default Circle;