import React from "react";

export type ActionTypes = setMovieListType | setMovieDetailsType | setSearchMovieType | setTrailerType | ChangeIsFetchingValueType | setMovieToListACType | resentCountType | increaseCountType

export type setMovieListType = {
    type: 'SET_MOVIE_LIST'
    movieList: any
}
export type ChangeIsFetchingValueType = {
    type: 'CHANGE_IS_FETCHING'
    value: boolean
}
export type FetchMovieListType = {
    type: string
    movieId: number
    sort: string
}
export type FetchSearchMovieType = {
    type: string
    value: string
}
export type FilterPropsType = {
    filterRatingHandler: () => void
    filterTitleHandler: () => void
    genreHandleChange: (event: React.ChangeEvent<{ value: any }>) => void
    arrOfId: Array<{id: number, name: string}>
}
export type FilmItem = {
    film: movieItemType
}
export type MovieContainerType = {
    movie: Array<movieItemType>
    title: string,
    sort: string
}
export type genresItem = {
    id: number,
    name: string
}
export type prodCounty = {
    iso_3166_1: string
    name: string
}
export type movieItemType = {
    adult: boolean
    backdrop_path: string
    genre_ids: Array<number>
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type detailsMovie = {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Array<genresItem>
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: any
    production_countries: Array<prodCounty>
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: any
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type searchItem = {
    adult: boolean
    backdrop_path: string
    genre_ids: any
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type setMovieDetailsType = {
    type: 'SET_DETAILS'
    details: any
}
export type movieTrailerType = {
    id: string
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    site: string,
    size: number,
    type: string
}
export type increaseCountType = {
    type: 'INCREASE_COUNT'
}
export type resentCountType = {
    type: 'RESET_COUNT'
}
export type setMovieToListACType = {
    type: 'SET_MOVIE_TO_LIST',
    movie: movieItemType
}
export type setTrailerType = {
    type: 'SET_TRAILER',
    movieTrailer: Array<movieTrailerType>
}
export type setSearchMovieType = {
    type: 'SET_SEARCH_MOVIE',
    result: Array<movieItemType>
}