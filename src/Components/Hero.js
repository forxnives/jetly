import React from 'react';

import hero from '../img/hero_couple.jpg';


import maskgirl from '../img/maskgirl_hero.png';






const Hero = () => {
    return (

        <section className="hero">

        <div className="heading-primary">
          <h1>Authentic Jamaican Goods.  Sold by independant Jamaican vendors.  Welcome to Caribbean Hut.</h1>
        </div>

        <div className="hero-grid">

          <div className="hero-grid-left">

            <div className="hero-grid-left__txt">

                

              <h2>Our Main Export is Good Vibes</h2>
            </div>

            <img src={hero} alt="baskets"/>

          </div>

          <div className="hero-grid-right">

            <img src={maskgirl} alt="" className="hero-grid-right-img__hide"/>

            <div className="hero-grid-right__txt">
            <h2 className="">Stay Safe with our Mask Collection</h2>

            </div>

          </div>

        </div>

      </section>


    )

}

export default Hero
