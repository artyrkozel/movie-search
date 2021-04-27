import React from "react";
import {FormControl, NativeSelect} from "@material-ui/core";
import { FilterPropsType } from "../../redux/types";




export const Filter:React.FC<FilterPropsType> = ({filterRatingHandler, filterTitleHandler, genreHandleChange,arrOfId, ...props}) => {
    return(
        <div className="filter">
            <h3 className="filter__title">Filters</h3>
            <button onClick={filterRatingHandler} className="filter__button">Rating</button>
            <button onClick={filterTitleHandler} className="filter__button">Title</button>
            <FormControl className="filter__controls">
                <NativeSelect
                    onChange={genreHandleChange}
                    name="age"
                    className="filter__select"
                >
                    {arrOfId.map((el) => <option key={el.id}>{el.name}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}