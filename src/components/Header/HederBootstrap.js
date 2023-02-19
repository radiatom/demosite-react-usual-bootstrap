import React from 'react';
import s from './Header.module.css'
import logo from "./../../img/vv.png"
import { NavLink } from 'react-router-dom';



const HederBootstrap = (props) => {
      return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                  <div className="container">
                        <NavLink className="navbar-brand p-0 " to="/Home"><img src={logo} alt="logo" width="40" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                              <ul className="navbar-nav">
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/Home">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/FavoritePlaces">Favorite places</NavLink>
                                    </li>
                                    <li className="nav-item">
                                          <NavLink className="nav-link" to="/FotoFavoritePlaces">Foto favorite places</NavLink>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      );
}

export default HederBootstrap;
