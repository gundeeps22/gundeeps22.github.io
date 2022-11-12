import styled from 'styled-components';

const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    row-gap: 1.5vh;
`;

const IconItem = styled.i`
    font-size: 6vw;
    padding-right: 5%;
`;

export function Icon(props) {
    const iconClasses = props.names.map(name => `devicon-${name}`);

    return (
        <IconWrapper>
            {
                iconClasses.map(iconClass => <IconItem key={iconClass} className={iconClass}></IconItem>)
            }
        </IconWrapper>
    )
}