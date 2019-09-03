import React, { useState, useEffect } from 'react'
import { Header } from 'components/Header';
import { SearchBar } from 'components/Search';
import { Card } from 'components/Card';
import { Container } from 'components/Container';
import { WanderingCubes } from 'styled-spinkit'
import { IdToGenre, GenreToId } from 'helpers/generos';
import { Circle } from 'components/Circle';

type Movie = {
    id: number;
    vote_average: string;
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
    genre_ids: number[];
}

export const Home: React.FC = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const baseUrl = 'https://api.themoviedb.org/3'


    async function fetchMovie(e: React.KeyboardEvent) {
        const keyCode = e.which || e.keyCode
        const Enter = 13

        if (keyCode === Enter) {
            setLoading(true)
            if (!isNaN(+search)) {
                const result = await fetch(`${baseUrl}/discover/movie?primary_release_year=${search}&sort_by=vote_average.desc`)
                    .then(res => res.json())
                setMovies(result.results)
                return setLoading(false)
            }

            const searchQuery = encodeURIComponent(search)
            let result = await fetch(`${baseUrl}/search/movie?api_key=da21e2f78ba27258188cae351d113688&language=pt-BR&query=${searchQuery}&page=1&include_adult=false`)
                .then(res => res.json())


            if (!result.total_results) {
                result = await fetch(`${baseUrl}/discover/movie?with_genres=${GenreToId[searchQuery]}`)
                    .then(res => res.json())
            }

            setMovies(Array.from(result.results))
            return setLoading(false)
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await fetch(`${baseUrl}/trending/all/day?api_key=da21e2f78ba27258188cae351d113688`)
                .then(res => res.json())
            setMovies(result.results)
            return setLoading(false)
        }

        fetchData()
    }, [])


    const [page, setPage] = useState(1)

    const indexOfLast = page * 5;
    const indexOfFirst = indexOfLast - 5;
    const moviesPage = movies.slice(indexOfFirst, indexOfLast);
    const pageNumbers = Array.from({ length: Math.ceil(movies.length / 5) }, (e, i) => i + 1)

    return (
        <>
            <Header title="Movies" />
            <Container>
                <SearchBar
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.target.value) }}
                    value={search}
                    onKeyDown={fetchMovie}
                />
                {loading ? <WanderingCubes />
                    : moviesPage.map((movie: Movie) => {
                        return (
                            <Card
                                key={movie.id}
                                rated={movie.vote_average}
                                imageLink={movie.poster_path}
                                title={movie.title}
                                year={movie.release_date}
                                content={movie.overview}
                                tags={movie.genre_ids.map(e => {
                                    return IdToGenre[e]
                                })} />
                        )
                    })
                }

                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }} >
                    <ul style={{
                        width: '300px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        {
                            pageNumbers.map(number => {
                                return (
                                    page === number ?
                                        <Circle key={number}>
                                            {number}
                                        </Circle>
                                        :
                                        <li
                                            key={number}
                                            id={String(number)}
                                            style={{
                                                fontSize: '1.3rem',
                                                color: '#116193',
                                                cursor: 'pointer'
                                            }}
                                            onClick={e => setPage(Number(e.currentTarget.id))}
                                        >
                                            {number}
                                        </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </Container>
        </>
    )
}
/*
ve mais sobre filme
[https://api.themoviedb.org/3/movie/550?api_key=da21e2f78ba27258188cae351d113688](https://api.themoviedb.org/3/movie/550?api_key=da21e2f78ba27258188cae351d113688)

treding
[https://api.themoviedb.org/3](https://api.themoviedb.org/3/trending/all/day?api_key=da21e2f78ba27258188cae351d113688)
 */
