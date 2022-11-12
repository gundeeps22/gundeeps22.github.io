import styled from 'styled-components';
import { Icon } from './Icon';
import { useDispatch, useSelector } from 'react-redux';
import { updateActiveExperience, selectActiveExperience } from '../features/experience/experienceSlice';
import { useEffect } from 'react';

const GlassDiv = styled.div`
    background: rgba( 0, 0, 99, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20.0px );
    -webkit-backdrop-filter: blur( 20.0px );
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 15px;
    border-radius: 10px;
`;

const ExperienceMargin = styled.div`
    display: flex;
    margin: 5% 10%;
`;

const ExperienceGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 58% 4% 38%;
    gap: 1em;
    grid-template-areas:
        "role . location"
        ". . ."
        "details . language"
        "extra extra extra"
`;

const Role = styled.div`
    grid-area: role;
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    font-weight: bold;
    color: white;
    text-align: left;
`;

const Location = styled.div`
    grid-area: location;
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    font-weight: bold;
    color: white;
    text-align: right;

`;

const Language = styled(GlassDiv)`
    grid-area: language;
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    font-weight: bold;
    color: white;
    text-align: left;
`;

const Detail = styled(GlassDiv)`
    grid-area: details;
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    color: white;
    text-align: left;
`;

const Extra = styled(GlassDiv)`
    grid-area: extra;
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    color: white;
    text-align: left;
`;

const SpacedList = styled.ul`
    height: 100%;
    list-style: circle;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
`;

export function Experience(props) {
  const { reference, experience, pageLength } = props;
  const activeExperience = useSelector(selectActiveExperience);
  const observerMargin = Math.floor(pageLength / 2);
  const dispatch = useDispatch();

  useEffect(() => {
    const observerConfig = {
      rootMargin: `-${
        pageLength % 2 === 0 ? observerMargin - 1 : observerMargin
      }px 0px -${observerMargin}px 0px`,
    };

    const handleIntersection = function(entries) {
      entries.forEach((entry) => {
        if (entry.target.id !== activeExperience.id && entry.isIntersecting) {
          dispatch(updateActiveExperience(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerConfig
    );
    observer.observe(reference.current);
    return () => observer.disconnect(); // Clenaup the observer if component unmount.
  }, [reference, observerMargin, activeExperience, pageLength, dispatch]);

    return(
        <ExperienceMargin id={experience.id} ref={reference}>
            <ExperienceGrid>
                <Role>
                    <div>{experience.role}</div>
                    <div>{experience.team}</div>
                </Role>
                <Location>
                    <div>{experience.location}</div>
                    <div>{experience.time}</div>
                </Location>
                <Detail>
                    <SpacedList>
                        {
                          experience.keyPoints.map( point => {
                                return (
                                    <li>{point}</li>
                                )
                            })
                        }
                    </SpacedList>
                </Detail>
                <Language>
                    <div style={{ paddingBottom: "10px", fontSize: "1.5em" }}>Languages and Frameworks</div>
                    <Icon names={experience.tools}></Icon>
                </Language>
                {experience.extra && (
                    <Extra>
                        <div style={{ fontWeight: 'bold' }}>{experience.extra.title}</div>
                        <div dangerouslySetInnerHTML={{__html: experience.extra.contents}}></div>
                    </Extra>
                )}
            </ExperienceGrid>
        </ExperienceMargin>
    )
}

