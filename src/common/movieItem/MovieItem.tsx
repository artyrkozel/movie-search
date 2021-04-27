import React from "react";
import {NavLink} from "react-router-dom";
import {increaseCountAC, setMovieToListAC} from "../../redux/movie-reducer";
import {useDispatch} from "react-redux";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {FilmItem, movieItemType} from "../../redux/types";
import placeholder from '../image/placeholder.png'


export const MovieItem: React.FC<FilmItem> = React.memo(({film}) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const dispatch = useDispatch()
    const onClickHandler = (film: movieItemType) => {
        setOpen(true)
        dispatch(setMovieToListAC(film))
        dispatch(increaseCountAC())
    }
    const movieImgPath = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div className="item" key={film.id}>
            <NavLink to={'/details/'+ film.id}>
                <div className="item__poster">
                    {film.poster_path ? <img src={movieImgPath + film.poster_path} alt="poster"/> :
                        <img src={placeholder} alt="poster"/>}
                    <span className="item__poster-vote">{film.vote_average}</span>
                </div>
                <span className="item__play"><PlayCircleFilledWhiteIcon className="item__play-icon"/></span>
            </NavLink>
            <div className="item__info">
                <h4 className="item__info-title">{film.original_title}</h4>
                <button disabled={open} onClick={() => onClickHandler(film)} className="item__info-btn"><BookmarkBorderIcon /></button>
            </div>
        </div>
    )
})