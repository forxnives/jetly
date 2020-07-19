import React from 'react';
import logo from './img/logo.jpg';
import hero from './img/baskets_hero.jpg';
import maskgirl from './img/maskgirl_hero.png'


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

      <section className="hero">

        <div className="heading-primary">
          <h1>Authentic Jamaican Goods, sold by independant Jamaican vendors.  Welcome to Jetsy.</h1>
        </div>

        <div className="hero-grid">

          <div className="hero-grid-left">



            <div className="hero-grid-left__txt">

              <h2>SOMETHING FOR FUCKS SAKE</h2>
            </div>


            <img src={maskgirl} alt="baskets"/>







            
          </div>



          <div className="hero-grid-right">

            <img src={hero} alt="" className="hero-grid-right-img__hide"/>



            <div className="hero-grid-right__txt">
            <h2 className="">Shop all things ready to ship</h2>

            </div>



          </div>



        </div>












      </section>











    </div>
  );
}

export default App;
