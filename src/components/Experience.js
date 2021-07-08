import styled from 'styled-components';

const ExperienceMargin = styled.div`
    display: flex;
    height: 60%;
    margin: 0% 10%;
`;

const ExperienceGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 56% 4% 36%;
    grid-template-rows: 10% 90%;
    grid-template-areas:
        "role . location"
        "details . language"
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

export function Experience() {
    return(
        <ExperienceMargin>
            <ExperienceGrid>
                <Role>
                    <div>Software Engineer</div>
                    <div>Connectivity Registry</div>
                </Role>
                <Location>
                    <div>New York City, NY</div>
                    <div>August 2020 - Present</div>
                </Location>
            </ExperienceGrid>
        </ExperienceMargin>
    )
}

