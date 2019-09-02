import styled from 'styled-components';
import { themeType } from 'styles/theme';

type ownProps = {
    fontSize?: string;
}

type circleType = ownProps & themeType

export const Circle = styled("div")<circleType>`
    height: 60px;
    width: 60px;
    background: ${props => props.theme.main};
    border: 5px solid ${props => props.theme.secondary};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${props => props.fontSize || '1.5rem'};
    color: ${props => props.theme.secondary};

    position: relative;
    ::before {
        content: ' ';
        position: absolute;
        z-index: -1;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border: 10px solid ${props => props.theme.main};
        border-radius: 50%;
    }
`;
