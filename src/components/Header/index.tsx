import React from 'react';

import { Container } from './styles';

type Props = {
    title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <Container>
            <h1>{ title }</h1>
        </Container>
    )
}
