import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import woodspoon from '../img/wood_spoons.jpg';
import rastabag from '../img/rasta_bag.jpg';
import teaset from '../img/tea_set.jpg';
import slippaz from '../img/orange_slippers.jpg';
import birdpillow from '../img/bird_pillow.jpg';
import woodbracelet from '../img/wood_bracelet.jpg';
import calabash from '../img/calabash_container.jpg';
import necklace from '../img/necklace.jpg';
import cartoonpins from '../img/cartoon_pins.jpg';

const Popular = () => {
    return (

        <section className="popular">

            <div className="popular-heading">
                <h1>
                    Popular Items
                </h1>
            </div>

            <div className="carousel">
                <InfiniteCarousel
                    breakpoints={[
                        {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                        },
                        {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                        },
                    ]}
                    dots={true}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={4}
                    slidesToShow={5}
                    scrollOnDevice={true}
                    >




                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={woodspoon} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Clay Vase with Wooden Utensils
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Wood n Wata
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li></li>
                                    </ul>
                                    <span className="ratings">(2,103)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 99.95
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>




                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={rastabag} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Rasta Color Handbag
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Dappa Doops 
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className='rated'></li>
                                    </ul>
                                    <span className="ratings">(1,459)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 50.25
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={teaset} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Clay Tea Set
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Blacks from Bogwalk
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li></li>
                                    </ul>
                                    <span className="ratings">(539)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 119.99
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={slippaz} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Orange Slippaz (pair)
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Peenie Wallie 
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                    </ul>
                                    <span className="ratings">(531)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 25.00
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={birdpillow} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Hummingbird Pillow
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Toni '2cute' Clarke
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li></li>
                                    </ul>
                                    <span className="ratings">(531)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 25.00
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={woodbracelet} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Wooden Bracelet
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Itchi Hanmiggle 
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                    </ul>
                                    <span className="ratings">(736)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 12.50
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={calabash} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Calabash Container Set
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Ricky 'Stinky' McCaw 
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                    </ul>
                                    <span className="ratings">(138)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 60.00
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>


                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={necklace} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Brown Pendant Necklace
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Kimmy Creates 
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                    </ul>
                                    <span className="ratings">(93)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 15.25
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>

                    
                    <div className="popular-item">
                        <a href="#">
                            <div className="popular-item__image">
                                <img src={cartoonpins} alt="wooden spoons"/>
                            </div>
                            <div className="popular-item__info">
                                <div className="title">
                                    <span className="title">
                                        Cartoon Pins Set
                                    </span>                                
                                </div>
                                <div className="vendor">
                                    <span>
                                    Trixie's Treats 
                                    </span>
                                </div>              
                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <span className="ratings">(93)</span>
                                </div>
                                <div className="price">
                                    <span className="price">
                                        USD 9.99
                                    </span>                                    
                                </div>
                            </div>
                        </a>
                    </div>
                    

            


                </InfiniteCarousel>
            </div>

        </section>
    )
    
}

export default Popular