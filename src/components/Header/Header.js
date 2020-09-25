import React from 'react';
import tgLogo from '../../image/whiteLogo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <header>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">

                        <a class="navbar-brand nav_logo" href="index.html">
                        <img src={tgLogo} class="img-fluid logo" alt="travel-guru-logo" style={{width: '150px', height: '35px', marginLeft: '10%'}}></img>
                        </a>
                        
                        <input class="form-control bg-transparent mr-sm-2 search_box" type="search"
                        placeholder=" &nbsp; &emsp; Search your Destination..." aria-label="Search"></input>
                        

                        <button class="navbar-toggler nav_tgl" type="button" data-toggle="collapse" data-target="#custom_nav"
                        aria-controls="custom_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse menu" id="custom_nav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                <a class="nav-link" href="/home">News</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/home">Destination</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/home">Blog</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/home">Contact</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;