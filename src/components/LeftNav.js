import React from 'react';
import {NavLink} from "react-router-dom";

const LeftNav = () => {
    return (
        <div>
            <div className="left-nav-container">
                <div className="icons">
                    <div className="icons-bis">
                        <NavLink to='/' exact activeClassName="active-left-nav">
                            <img src="./img/icons/home.svg" alt="home"/>
                        </NavLink>
                        <NavLink to='/' exact activeClassName="active-left-nav">
                            <img src="./img/icons/rocket.svg" alt="home"/>
                        </NavLink>
                        <NavLink to='/' exact activeClassName="active-left-nav">
                            <img src="./img/icons/user.svg" alt="home"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;
