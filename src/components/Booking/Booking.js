import React from 'react';
import Header from '../Header/Header';
import { useHistory, useParams } from "react-router-dom";
import './Booking.css';
import '../Header/Header.css';
import cardInfo from '../../fakeData/cardInfo';

const Booking = () => {
    const history = useHistory();
	const handleLoginRoute = () => {
		history.push("/search");
	};
    const {id} = useParams();
	const bookingInfo = cardInfo.find((item) => item.id === id);
	
    return (
        <div class="body">
            <div class="color-overlay">    
                <Header></Header> 
                <section class="my-form">
                    <div class="booking">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-5" style={{marginTop: '70px'}}>
                                    <h1 style={{fontFamily: "'Bebas Neue', cursive", fontSize: "98px", fontWeight: "400"}}>{bookingInfo.title}</h1>
                                    <p style={{fontSize: "16px"}}>{bookingInfo.description}</p>
                                </div>

                                <div class="form_area col-md-4  ">                                                                
                                    <div class="form-group">
                                        <label>Origin</label>
                                        <input type="text" class="form-control formInput" placeholder="Dhaka"></input>
                                    </div>

                                    <div class="form-group">
                                        <label>Destination</label>
                                        <input type="text" class="form-control formInput" placeholder="Cox's Bazar"></input>
                                    </div>

                                    <div>
                                        <div class="row">
                                            <div class="col-md-6">

                                                <div class="form-group">
                                                    <label>From</label>
                                                    <input type="text" class="form-control formInput" placeholder="01/09"></input>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>To</label>
                                                    <input type="text" class="form-control formInput" placeholder="12/09"></input>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="loginButton text-center mt-3" onClick={handleLoginRoute}>Start Booking</button>
                                    </div>                               
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                   
            </div>
        </div>
    );
};

export default Booking;