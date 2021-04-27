import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { MovieItem } from "../../common/movieItem/MovieItem";
import { resentCountAC } from "../../redux/movie-reducer";
import {getWatchlist} from "../../redux/selectors";
import {movieItemType} from "../../redux/types";

export const Watchlist = () => {
    const watchList = useSelector(getWatchlist)
    let movies = watchList.reduce((acc, movie) => {
        if (acc.map[movie.id])
            return acc;
        acc.map[movie.id] = true
        acc.filteredMovies.push(movie);
        return acc;
    }, {
        map: {} as any,
        filteredMovies: [] as Array<movieItemType>
    })
        .filteredMovies;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resentCountAC())
    })
    return (
        <div className="watchlist">
            <div className="container">
                <div className="watchlist__titles">
                    <h2 className="watchlist__titles-main">Watch list</h2>
                    <h3 className="watchlist__titles-subtitle">Watch list</h3>
                </div>
                <div className="watchlist__inner">
                    {movies.length === 0 && <div className="watchlist__error">Your watch list is empty</div>}
                    {movies.map((film) => <MovieItem key={film.id} film={film}/>)}
                </div>
            </div>
        </div>
    )
}