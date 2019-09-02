import React from 'react';
import { Header } from 'components/Header';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from "styles";
import { SearchBar } from 'components/Search';
// import { Circle } from 'components/Circle';
// import { Chip } from 'components/Chip';
import { Card } from 'components/Card';
import { Container } from 'components/Container';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header title="Movies" />
        <Container>
          <div style={{
            display: 'flex',
            height: 500,
            // width: '100vw',
            alignItems: 'center',
            justifyContent: 'space-around',
            // background: 'palevioletred',
            flexDirection: 'column',
            marginRight: 'auto',
            marginLeft: 'auto',
            maxWidth: '1050px',
            paddingRight: '10px',
            paddingLeft: '10px',
            zIndex: -33
          }}>
            <SearchBar />

            <Card 
              rated="6.7"
              imageLink="/2lJWTjVKJMxYinA5YNJo9R5YZ7E.jpg"
              title="Thor"
              year="2017-10-26"
              content="Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok, a destruição de seu lar e o fim da civilização asgardiana que está nas mãos de uma nova e poderosa ameaça, a terrível Hela. Mas primeiro ele precisa sobreviver a uma batalha de gladiadores que o coloca contra seu ex-aliado e vingador, o Incrível Hulk."
              tags={["Aventura"]}/>

          </div>

        </Container>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

export default App;
