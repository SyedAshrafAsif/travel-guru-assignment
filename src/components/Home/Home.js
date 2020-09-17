import React, { useState } from 'react';
import Header from '../Header/Header';
import './Home.css';
import {Card} from 'react-bootstrap';
import cardInfo from '../../fakeData/cardInfo';

const Home = () => {
    const data = cardInfo;
    const [destination, setDestination] = useState(data);
    const [cardDetails, setCardDetails] = useState([]);

    const handleCardInfo = (cardInfo) => {
        const showDescription = document.getElementById('card-desc');
        if (showDescription.style.display === "none") {
            showDescription.style.display = "block";
          } else {
            showDescription.style.display = "none";
          }
        const newInfo = [cardDetails, cardInfo];
        setCardDetails(newInfo);
        }

        

    return (
        <div className="background">
            <Header></Header>
            <div className="adjust align-middle d-flex justify-content-center">
                <div id="card-desc" className="description text-white">
                    {
                        destination.map(cardDesc => 
                            <div>
                                <h2>{cardDesc.title}</h2>
                                <p>{cardDesc.description}</p>
                            </div>                        
                             )                           
                    }                   
                </div>
                <div className="card-area">
                    {
                        destination.map((cardInfo) =>                                           
                            <Card className="bg-transparent text-white card-display">
                                <Card.Img src={cardInfo.img} alt="Card image" title="Double click on it!"/>
                                <Card.ImgOverlay>
                                    <Card.Title><h4 style={{textAlign: 'center'}}>{cardInfo.title}</h4></Card.Title>                                    
                                    <a onClick={() => handleCardInfo(cardInfo)} href="#" className="stretched-link"></a>
                                </Card.ImgOverlay>
                            </Card>                        
                        )    
                    }                    
                    
                </div>                                                           
            </div>
        </div>
    );
};

export default Home;