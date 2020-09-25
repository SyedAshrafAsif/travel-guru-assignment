import React from 'react';
import './Search.css';
import logo from '../../image/logo.png';

const Search = () => {
    return (
        <div className="body">            
            <header>
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand nav_logo" href="index.html">
                            <img src={logo} class="img-fluid logo" alt="travel-guru-logo"></img>
                        </a>

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
                                <a class="nav-link" href="/home"> <b>Asif Syed</b> </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <hr></hr>
            </header>

            <section class="feature">
                <div class="container">
                    <div class="row">
                            <div class="col-md-6">
                                <p class="top_p">252 stays Apr 13-17, 3 guests</p>
                                <h2 class="top_h2">Stays in Cox's Bazar</h2>

                                <div class="row search_item">
                                    <div class="col-md-6">
                                        <div class="search_img">
                                            <img src="../../image/Rectangle 26.png" alt=""></img>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="description">
                                            <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                                            <p>4guests 2bedrooms 2beds 2baths<br/>
                                            Wif Air conditioning Kitchen<br/>
                                            Cancellation flexibility available</p>
                                            <p> <i class="fas fa-star feature_icon"> 4.9(20)</i> $34/night <span id="total">$167 total</span> </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="row search_item">
                                    <div class="col-md-6">
                                        <div class="search_img">
                                            <img src="../../image/Rectangle 27.png" alt=""></img>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="description">
                                            <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                                            <p>4guests 2bedrooms 2beds 2baths<br/>
                                            Wif Air conditioning Kitchen<br/>
                                            Cancellation flexibility available</p>
                                            <p> <i class="fas fa-star feature_icon"> 4.9(20)</i> $34/night <span id="total">$167 total</span> </p>
                                        </div>
                                    </div>
                                </div>


                                <div class="row search_item">
                                    <div class="col-md-6">
                                        <div class="search_img">
                                            <img src="../../image/Rectangle 28.png" alt=""></img>
                                        </div>
                                    </div>
                                <div class="col-md-6">
                                    <div class="description">
                                        <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                                        <p>4guests 2bedrooms 2beds 2baths<br/>
                                        Wif Air conditioning Kitchen<br/>
                                        Cancellation flexibility available</p>
                                        <p> <i class="fas fa-star feature_icon"> 4.9(20)</i> $34/night <span id="total">$167 total</span> </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-6">
                            <div class="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d948789.8001403263!2d91.38381589329826!3d21.733376855879346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scox%20bazar%20airport!5e0!3m2!1sen!2sbd!4v1600792782987!5m2!1sen!2sbd"
                                    width="500" height="700" frameborder="0" style={{border: '0px', borderRadius: '10px'}} allowFullScreen=""
                                    aria-hidden="false" tabIndex="0" title="google-map">                               
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default Search;