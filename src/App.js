import React from 'react';
import logo from './img/logo.jpg';




import Hero from '../src/Components/Hero';
import Popular from '../src/Components/Popular';
import Gifts from '../src/Components/Gifts';
import About from '../src/Components/About';
import Footer from '../src/Components/Footer';






function App() {
  return (
    <div className="App">
      <section className="nav-section">
        <div className="nav-container nav-container-upper">
          <header className="nav">
            <div className="nav-logo">
              <img src={logo} alt="temp-logo" className="nav-logo__img"/>
            </div>

            <div className="nav-form">
              <form className="nav-form-search">
                <input className="nav-form-search__input" type="text" name="" placeholder="Search for items or sellers" />
                <a className="nav-form-search__btn" href="#">
                  <span className="nav-form-search__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path><path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path></svg>
                  </span>
                </a>

              </form>
            </div>

            <div className="nav-buttons">
              <div className="nav-buttons-signin">
                <a href="#"  className="nav-buttons-signin__btn">
                  <span className="nav-buttons-signin__btn-txt">
                    Sign In
                  </span>
                </a>
              </div>
              <div className="nav-buttons-cart">
                <a href="#" className="nav-buttons-cart__btn">
                  <span className="nav-buttons-cart__btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="9" cy="20" r="2"></circle><circle cx="16" cy="20" r="2"></circle><path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z"></path></svg>
                  </span>
                </a>
              </div>
            </div>

          </header>
          
        </div>

        <div className="nav-container nav-container-lower"> 


          <div className="dropdown">
            {/* <div className="spacer">&nbsp;</div> */}
            <ul className="dlist">

              <li><a href="#">Art & Paintings</a>
                <ul>
                  <li><a href="#">subcat1</a></li>
                  <li><a href="#">subcat2</a></li>
                  <li><a href="#">subcat3</a></li>
                  <li><a href="#">subcat4</a></li>
                </ul>
              </li>

              <li><a href="#">Clothing & Shoes</a>
                <ul>
                  <li><a href="#">subcat1</a></li>
                  <li><a href="#">subcat2</a>
                    <ul>
                      <li><a href="#">subsubcat1</a></li>
                      <li><a href="#">subsubcat2</a></li>
                      <li><a href="#">subsubcat3</a>
                      
                        <ul>
                          <li><a href="#">subsubsubcat1</a></li>
                          <li><a href="#">subsubsubcat2</a></li>
                          <li><a href="#">subsubsubcat3</a></li>
                          <li><a href="#">subsubsubcat4</a></li>
                        </ul>

                      </li>
                      <li><a href="#">subsubcat4</a></li>
                    </ul>
                      
                  </li>
                  <li><a href="#">subcat3</a></li>
                  <li><a href="#">subcat4</a></li>
                </ul>
              </li>

              <li><a href="#">Jewelry & Accessories</a>
                <ul>
                  <li><a href="#">subcat1</a></li>
                  <li><a href="#">subcat2</a></li>
                  <li><a href="#">subcat3</a></li>
                  <li><a href="#">subcat4</a></li>
                </ul>
              </li>

              <li><a href="#">Entertainment & Music</a>
                <ul>
                  <li><a href="#">subcat1</a></li>
                  <li><a href="#">subcat2</a></li>
                  <li><a href="#">subcat3</a></li>
                  <li><a href="#">subcat4</a></li>
                </ul>
              </li>

              <li className="dlist-cat"><a href="#">Sculptures & Crafts</a>
                <ul>
                  <li><a href="#">subcat1</a></li>
                  <li><a href="#">subcat2</a></li>
                  <li><a href="#">subcat3</a></li>
                  <li><a href="#">subcat4</a></li>
                </ul>
              </li>

            </ul>
          </div>

        </div>

      </section>

      <Hero />

      <section className="features">

        <div className="features-container">

         <div className="features-container-flex">

            <div className="feature feature1">
              
              <h3 className="feature-heading">

                <span className="feature-heading__icon">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>


                </span>

                <span className="feature-heading__txt">
                  One-of-a-kind

                </span>


              </h3>

              <div className="feature-txt">

                <span className="feature-txt__txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia 
                  provident fuga veniam autem praesentium repellendus id exercitationem 
                  dolorem saepe dolores aliquam odio, 
                </span>

              </div>

            </div>

            <div className="feature feature2">


            <h3 className="feature-heading">

                <span className="feature-heading__icon">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>

                </span>

                <span className="feature-heading__txt">
                  Independant Sellers

                </span>

              </h3>

              <div className="feature-txt">

                <span className="feature-txt__txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia 
                  provident fuga veniam autem praesentium repellendus id exercitationem 
                  dolorem saepe dolores aliquam odio, 
                </span>
                
              </div>
              
            </div>

            <div className="feature feature3">

              <h3 className="feature-heading">

                <span className="feature-heading__icon">

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path></svg>


                </span>

                <span className="feature-heading__txt">
                  Secure Transactions


                </span>

              </h3>

              <div className="feature-txt">

                <span className="feature-txt__txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia 
                  provident fuga veniam autem praesentium repellendus id exercitationem 
                  dolorem saepe dolores aliquam odio,
                </span>

                
              </div>

            </div>
          </div>
        </div>

      </section>







        <Popular />

        <Gifts />

        <About />

        <Footer />




    </div>
  );
}

export default App;
