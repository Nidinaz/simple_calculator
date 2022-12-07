
import "./calculatorApp.css";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";
import { useDispatch } from 'react-redux';
import { loadButtons, loadClear } from '../redux/calculatorRedux/calculator.actions';
// import { CALCULATOR_KEY } from "../redux/calculatorRedux/calculator.reducer";


const CalculatorApp = () => {

  const dispatch = useDispatch()


  return (
    <React.Fragment>
      <section>
        <div className="main-container">
          <div className="toppage">
            <GiHamburgerMenu></GiHamburgerMenu>
            <h1>Calculator App</h1>
          </div>

          {/* Screen */}
          <div className="screen">
            <input 
            type='text'
            placeholder='0'
            className='screen_item'/>
          </div>


          {/* Keypad */}
          <div className='keypad' >
            <button onClick={() => dispatch(loadClear('C'))} className="keypad__button">C</button>
            <button onClick={() => dispatch(loadButtons('%'))} className="keypad__button">%</button>
            <button onClick={() => dispatch(loadButtons("*"))} className="keypad__button">*</button>
            <button onClick={() => dispatch(loadButtons('-'))}className="keypad__button">-</button>

            <button onClick={() => dispatch(loadButtons(7))} className="keypad__button">7</button>
            <button onClick={() => dispatch(loadButtons(8))} className="keypad__button">8</button>
            <button onClick={() => dispatch(loadButtons(9))} className="keypad__button">9</button>

            <button onClick={() => dispatch(loadButtons(4))} className="keypad__button">4</button>
            <button onClick={() => dispatch(loadButtons(5))} className="keypad__button">5</button>
            <button onClick={() => dispatch(loadButtons(6))} className="keypad__button">6</button>
            <button onClick={() => dispatch(loadButtons('+'))} className="keypad__button button_plus">+</button>

            <button onClick={() => dispatch(loadButtons(1))} className="keypad__button">1</button>
            <button onClick={() => dispatch(loadButtons(2))} className="keypad__button">2</button>
            <button onClick={() => dispatch(loadButtons(3))} className="keypad__button">3</button>

            <button onClick={() => dispatch(loadButtons(0))} className="keypad__button button_0">0</button>
            <button onClick={() => dispatch(loadButtons('.'))} className="keypad__button">.</button>
            <button onClick={() => dispatch(loadButtons('='))} className="keypad__button button_is">=</button>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CalculatorApp;
