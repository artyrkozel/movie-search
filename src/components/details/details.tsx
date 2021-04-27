import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FetchMovieDetailsAC, FetchTrailer} from "../../redux/movie-reducer";
import {getIsFetchingValue, getMovieDetails, getTrailer} from "../../redux/selectors";
import {Preloader} from "../../common/preloader/Preloader";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Modal from "../../common/modal/Modal";

export const Details = () => {
    const [modalActive, setModalActive] = useState<boolean>(false)
    const onClickHandler = () => {
        setModalActive(true)
    }
    const onClickModalHandler = () => {
        setModalActive(!modalActive)
    }
    const {id} = useParams<{ id: any }>()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchMovieDetailsAC(id))
        dispatch(FetchTrailer(id))
    }, [dispatch, id])
    const movieDetails = useSelector(getMovieDetails)
    const movieTrailer = useSelector(getTrailer)
    const isFetching = useSelector(getIsFetchingValue)
    const trailer = movieTrailer[0]
    const movieImgPath = 'https://image.tmdb.org/t/p/w500/'
    if (isFetching) {
        return <Preloader/>
    }
    return (
        <div className="details">
            <div className="container">
                <div className="details__inner">
                    <div className="details__film">
                        <img src={movieImgPath + movieDetails.poster_path} className="film__poster-poster"
                             alt="backdrop"/>
                        <div className="film__poster-trailer" onClick={onClickHandler}>
                            <img src={movieImgPath + movieDetails.backdrop_path} alt="backdrop"/>
                            <button className="film__poster-button">Trailer</button>
                        </div>
                    </div>
                    <div className="details__info">
                        <h2 className="details__info-title">{movieDetails.title}</h2>
                        <Box component="fieldset" mb={3} borderColor="transparent" className="details__info-rating">
                            <Rating name="half-rating" value={movieDetails.vote_average} precision={0.1} readOnly
                                    max={10}/>
                        </Box>
                        <div className="details__info-numbers">
                            <div className="block">
                                <span className="block__item">{movieDetails.vote_average}</span>
                                <span>IMDb</span>
                            </div>
                            <div className="block">
                                <span className="block__item">{movieDetails.vote_count}</span>
                                <span>Vote Count</span>
                            </div>
                            <div className="block">
                                <span className="block__item">{movieDetails.budget}</span>
                                <span>Budget</span>
                            </div>
                        </div>
                        <div className="overview">
                            <h2 className="overview__title">Overview</h2>
                            <p className="overview__description">{movieDetails.overview}</p>
                        </div>
                        <div className="description">
                            <h2 className="description__title">Category:</h2>
                            <div className="description__genres">
                                {movieDetails.genres?.map((el) => {
                                    return <span key={el.id} className="description__info">{el.name}</span>
                                })}
                            </div>
                        </div>
                        <div className="description">
                            <h2 className="description__title">Relies Date:</h2>
                            <span className="description__info">{movieDetails.release_date}</span>
                        </div>
                        <div className="description">
                            <h2 className="description__title">Tagline:</h2>
                            <span className="description__info">{movieDetails.tagline}</span>
                        </div>
                        <div className="description">
                            <h2 className="description__title">Length:</h2>
                            <span className="description__info">{movieDetails.runtime}</span>
                        </div>
                        <div className="description">
                            <h2 className="description__title">County:</h2>
                            {movieDetails.production_countries !== undefined &&
                            <span className="description__info">{movieDetails.production_countries[0]?.name}</span>}
                        </div>
                    </div>
            </div>
                {trailer !== undefined && modalActive === true ? <Modal modalActive={modalActive} onClickModalHandler={onClickModalHandler} trailer={trailer}/> : ''}
        </div>
</div>
)
}
