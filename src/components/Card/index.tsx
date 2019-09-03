import * as React from 'react'
import { CardContainer, CardImage, CardHeader, CardCircle, CardContent } from './styles';
import { Circle } from 'components/Circle';
import { Chip } from 'components/Chip';

type Prop = {
    rated: string | number ;
    imageLink: string;
    title: string;
    year: string;
    content: string;
    tags: string[];
}

export const Card: React.FC<Prop> = ({ rated, imageLink, title, year, content, tags }) => {

    return (
        <CardContainer>
            <CardImage src={`https://image.tmdb.org/t/p/w400${imageLink}`} alt=""/>
            <CardCircle>
                <Circle style={{
                    position: 'relative',
                    bottom: -32
                }}>
                    {Number(rated) * 10}%
                </Circle>
            </CardCircle>
            <CardHeader>{title}</CardHeader>
            <CardContent>
                <div style={{
                    marginLeft: 100,
                    fontSize: '1.2rem'
                }}>{year}</div>
                <div style={{
                    padding: 10,
                    fontSize: '1rem'

                }}>{content}</div>
                <div style={{
                    marginBottom: 50,
                    marginTop: 5,
                    display: 'flex',
                    alignItems: 'flex-start'
                }}>
                   {tags.map((tag, index) => <Chip key={index} style={{marginLeft: 10}}>{tag}</Chip>)}
                </div>
            </CardContent>
        </CardContainer>
    )
}
