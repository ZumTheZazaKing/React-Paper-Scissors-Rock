import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

function ChoiceMenu(){
  
  return <div>

    <button>Paper</button>
    <button>Scissors</button>
    <button>Rock</button>

  </div>

}

function OutputMenu(){

  return <div>

    <p>User Input</p>
    <p>Computer Choice</p>

  </div>

}

function App(){

  return <div>

    <ChoiceMenu/>
    <OutputMenu/>

  </div>

}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
