import React from 'react';
import jamaicaheart from '../img/jamaica_heart.jpg';
import maletshirt from '../img/male_tshirt.png';
import femaletshirt from '../img/female_tshirt.jpg';
import personalized from '../img/personalized.png';
import weddinggift from '../img/wedding_gift.png'




const Gifts = () => {
    return (

        <section className="gifts">

        
            
            <div className="gifts-heading">
                <h1>Shop For Gifts</h1>
            </div>

            <div className="gifts-container">

                <a href="#">
                    
                    <div className="gifts-card">
                        <div className="gifts-card_image">
                            <img src={jamaicaheart} alt="Jamaica Heart Chain"/>
                        </div>
                        <div className="gifts-card_txt">
                            <span>Anniversary Gifts</span>
                        </div>
                    </div>

                </a>
            

                <a href="#">

                    <div className="gifts-card">
                        <div className="gifts-card_image">
                            <img src={maletshirt} alt="Jamaica Heart Chain"/>
                        </div>
                        <div className="gifts-card_txt">
                            <span>Gifts for Him</span>
                        </div>
                    </div>

                </a>


                <a href="#">

                    <div className="gifts-card">
                        <div className="gifts-card_image">
                            <img src={femaletshirt} alt="Jamaica Heart Chain"/>
                        </div>
                        <div className="gifts-card_txt">
                            <span>Gifts for Her</span>
                        </div>
                    </div>

                </a>


                <a href="#">

                    <div className="gifts-card">
                        <div className="gifts-card_image">
                            <img src={personalized} alt="Jamaica Heart Chain"/>
                        </div>
                        <div className="gifts-card_txt">
                            <span>Personalized Gifts</span>
                        </div>
                    </div>

                </a>

                <a href="#">

                    <div className="gifts-card">
                        <div className="gifts-card_image">
                            <img src={weddinggift} alt="Jamaica Heart Chain"/>
                        </div>
                        <div className="gifts-card_txt">
                            <span>Wedding Gifts</span>
                        </div>
                    </div>

                </a>









            </div>





      </section>


    )

}

export default Gifts