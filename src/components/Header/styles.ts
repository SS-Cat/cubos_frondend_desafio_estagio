import styled from 'styled-components';
import { themeType } from 'styles/theme';


export const Container = styled('div')<themeType>`
    height: 100px;
    padding: 0 30px;

    background: ${props => props.theme.main};
    color: ${props => props.theme.secondary};

    font-size: 25px;
    font-weight: lighter;

    display: flex;
    align-items: center;
    justify-content: center;
`;
