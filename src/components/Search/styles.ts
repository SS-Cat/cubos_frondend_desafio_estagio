import styled from 'styled-components';
import { themeType } from 'styles/theme';

export const Input = styled('input')<themeType>`
    margin: 5% 0;
    padding: 20px;
    width: 100%;
    height: 50px;

    background: ${props => props.theme.background};
    color:  ${props => props.theme.main};

    border-radius: 25px;
    border: none;
    
    font-family: 'Lato';
    font-size: 1.2rem;
    /* font-weight: bolder; */

`;
