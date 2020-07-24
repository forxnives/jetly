import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import woodspoon from '../img/wood_spoons.jpg';

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

                                <h3 className="title">
                                Wooden Spoon Set
                                </h3>
                                <br/>
                                <span className="vendor">
                                Wooden Creations
                                </span>
                                <br/>
                                <span className="stars"></span>


                                <div className="rating-section">
                                    <ul className="rating">
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li className="rated"></li>
                                        <li></li>
                                    </ul>
                                    <span className="ratings">(2,000)</span>
                                </div>


                            </div>

                        </a>

                    </div>

                    <div className="popular-item">

                        <a href="#">

                            <div className="popular-item__image">
                                <img src={woodspoon} alt="wooden spoons"/>

                            </div>

                            <div className="popular-item__info">

                                <span className="title">
                                Wooden Spoon Set
                                </span>
                                <br/>
                                <span className="vendor">
                                Wooden Creations
                                </span>
                                <br/>
                                <span className="stars"></span>

                            </div>

                        </a>

                    </div>


                    <div className="popular-item">

                        <a href="#">

                            <div className="popular-item__image">
                                <img src={woodspoon} alt="wooden spoons"/>

                            </div>

                            <div className="popular-item__info">

                                <span className="title">
                                Wooden Spoon Set
                                </span>
                                <br/>
                                <span className="vendor">
                                Wooden Creations
                                </span>
                                <br/>
                                <span className="stars"></span>

                            </div>

                        </a>

                    </div>


                    <div className="popular-item">

                        <a href="#">

                            <div className="popular-item__image">
                                <img src={woodspoon} alt="wooden spoons"/>

                            </div>

                            <div className="popular-item__info">

                                <span className="title">
                                Wooden Spoon Set
                                </span>
                                <br/>
                                <span className="vendor">
                                Wooden Creations
                                </span>
                                <br/>
                                <span className="stars"></span>

                            </div>

                        </a>

                    </div>

                    <div className="popular-item">

                        <a href="#">

                            <div className="popular-item__image">
                                <img src={woodspoon} alt="wooden spoons"/>

                            </div>

                            <div className="popular-item__info">

                                <span className="title">
                                Wooden Spoon Set
                                </span>
                                <br/>
                                <span className="vendor">
                                Wooden Creations
                                </span>
                                <br/>
                                <span className="stars"></span>

                            </div>

                        </a>

                    </div>


                </InfiniteCarousel>
            </div>

        </section>
    )
    
}

export default Popular