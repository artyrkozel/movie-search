import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FetchMovieListAC} from "../../redux/movie-reducer";
import {getIsFetchingValue, getMovieList} from "../../redux/selectors";
import {Preloader} from "../../common/preloader/Preloader";
import {MovieContainer} from "../movieContainer/MovieContainer";

export const Releases = () => {
    const movie = useSelector(getMovieList)
    const isFetching = useSelector(getIsFetchingValue)
    const sort = 'upcoming'
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchMovieListAC(1, 'upcoming'))
    }, [dispatch])

    if(isFetching){return <Preloader />}
    return (
        <MovieContainer movie={movie} title={'New Releases'} sort={sort}/>
    )
}