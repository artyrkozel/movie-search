import React, {ChangeEvent, useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import { FetchSearchMovieAC } from "../../redux/movie-reducer";
import TextField from "@material-ui/core/TextField/TextField";
import {InputAdornment} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
            color: '#fff',
            '& .MuiInput-underline:before':{
                display: 'none'
            },
            '& .MuiInputBase-root': {
                color: '#fff',
                fontFamily: 'Work Sans, sans-serif'
            },
            '& .MuiInput-underline:after': {
                borderBottom: 'none',
            }
        },
    }),
);
export const Search = () => {
    const [value, setValue] = useState("")
    const [error, setError] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onClickHandler = () => {
        if(value !== ''){
            dispatch(FetchSearchMovieAC(value))
            setValue('')
            history.push('/result')
        } else {
            setError('Incorrect title')
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(event.target.value)
    }
    const onKeyPressHandler = (e: any) => {
        if (e.key === 'Enter' && value !== '') {
            dispatch(FetchSearchMovieAC(value))
            setValue('')
            history.push('/result')
    } else {
            setError('Incorrect title')
        }
    }
    const classes = useStyles();
    return (
            <div className="search">
                <TextField
                    type={'text'}
                    value={value}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    placeholder={'Search movie'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{color: '#fff'}}/>
                            </InputAdornment>
                        ),
                    }}
                />
                <button type={'submit'} onClick={onClickHandler} className="search__button">Search</button>
                {error && <div className="search__error">{error}</div>}
            </div>
    )
}