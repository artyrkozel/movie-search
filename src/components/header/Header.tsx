import React from "react";
import './../../scss/style.scss'
import logo from './../../common/image/logo.png'
import { NavLink } from "react-router-dom";
import {Search} from "../search/Search";
import { Nav } from "../nav/Nav";

export const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink to="/main"><img src={logo} className="logo" alt="logo"/></NavLink>
                    <Nav />
                    <Search />
                </div>
            </div>
        </div>
    )
}