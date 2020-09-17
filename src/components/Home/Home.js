import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import {Card} from 'react-bootstrap';
import sajekImg from '../../image/Sajek.png';
import sreemongolImg from '../../image/Sreemongol.png';
import sundorbonImg from '../../image/sundorbon.png';
import cardInfo from '../../fakeData/cardInfo';

const Home = () => {
    const data = cardInfo;
    const [destination, setDestination] = useState(data);
    const [info, setCardInfo] = useState([]);

    const handleCardInfo = (cardInfo) => {
        const newInfo = [cardInfo];
        setCardInfo(newInfo);
        }

    return (
        <div className="background">
            <Header></Header>
            <div className="adjust align-middle d-flex justify-content-center">
                <div className="description nav justify-content-center text-white">
                    {
                        destination.map(cardInfo => {
                            return <div>
                                <h2>{cardInfo.title}</h2>
                                <p>{cardInfo.description}</p>
                            </div>                            
                        })
                    }
                </div>
                <div className="card-area">
                    <div>
                        <Card style={{ width: '12rem', margin: '5px'}} className="bg-transparent text-white">
                            <Card.Img src={sajekImg} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><h4>Sajek</h4></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div>
                        <Card style={{width: '12rem', margin: '5px'}} className="bg-transparent text-white">
                            <Card.Img src={sreemongolImg} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><h4>Sreemongol</h4></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                    <div>
                        <Card style={{width: '12rem', margin: '5px'}} className="bg-transparent text-white">
                            <Card.Img src={sundorbonImg} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title><h4>Sundarban</h4></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                </div>                                                           
            </div>
        </div>
    );
};

export default Home;