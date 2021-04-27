import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector} from "react-redux";
import { getWatchlistCount } from "../../redux/selectors";

export const Nav = () => {
    const count = useSelector(getWatchlistCount)
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item"><NavLink to={'/main'} activeClassName="nav__list-active" className="nav__list-link">New release</NavLink></li>
                <li className="nav__list-item">
                    <NavLink to={'/trending'} activeClassName="nav__list-active" className="nav__list-link">Trending</NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to={'/rated'} activeClassName="nav__list-active" className="nav__list-link">Top rated</NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to={'/watchlist'} activeClassName="nav__list-active" className="nav__list-link">Watch List <span className="nav__count">{count > 0 ? count : ''}</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}