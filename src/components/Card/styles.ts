import styled from 'styled-components';

export const CardContainer = styled.div`
    background: ${props => props.theme.background};
    height: 600px;
    width: 100%;
    z-index: -2;
    overflow: hidden;

    display: grid;
    grid-template-columns: 250px 100px 1fr;
    grid-template-rows: 65px 1fr;
    grid-template-areas: 
    "image circle header"
    "image content content";

`;

export const CardImage = styled.img`
    grid-area: image;
    width: 100%;
    height: 100%;
`;

export const CardHeader = styled.div`
    grid-area: header;
    background: ${props => props.theme.main};

    font-size: 3rem;
    font-family: 'Lato';
    color: ${props => props.theme.secondary};

    display: flex;
    align-items: flex-end;
    padding: 5px;
`;

export const CardCircle = styled.div`
    grid-area: circle;
    background: ${props => props.theme.main};
    width: 100%;

    display: flex;
    /* align-items: center; */
    justify-content:center;
`;

export const CardContent = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
