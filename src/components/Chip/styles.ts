import styled from 'styled-components';

export const Chip = styled.span`
    padding: 13px;
    height: 20px;
    max-width: 140px;

    border: 2px solid ${props => props.theme.main};
    border-radius: 25px;

    background: none;

    color: ${props => props.theme.main};
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;
