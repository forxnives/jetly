import React from 'react';
import logo from './img/logo.jpg';


function App() {
  return (
    <div className="App">
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
              <button className="nav-buttons-signin__btn">
                <span className="nav-buttons-signin__btn-txt">
                  Sign In
                </span>
              </button>
            </div>
            <div className="nav-buttons-cart">
              <button className="nav-buttons-cart__btn">
                <span className="nav-buttons-cart__btn-icon">
                  Cart
                </span>
              </button>
            </div>
          </div>

          

        </header>
        
      </div>


    </div>
  );
}

export default App;
