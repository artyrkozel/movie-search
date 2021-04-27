import React from "react";
import {useSelector} from "react-redux";
import {getSearchMovie} from "../../redux/selectors";
import {MovieItem} from "../../common/movieItem/MovieItem";
import noResultsImg from './../../common/image/noResults.png'

export const Result = () => {
    const result = useSelector(getSearchMovie)
    return(
        <div className="result">
            <div className="container">
                <div className="result__inner">
                    {result.length === 0 ? <img  className="result__image" src={noResultsImg} alt="noResults"/> : ''}
                    {result.map((movie) =>
                        <MovieItem key={movie.id} film={movie}/>)}
                </div>
            </div>
        </div>
    )
}