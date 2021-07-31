import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './style.css';
import reportWebVitals from './reportWebVitals';

function ChoiceMenu(props){
  
  return <div>

    <button name="paper" onClick={props.handleClick}>Paper</button>
    <button name="scissors" onClick={props.handleClick}>Scissors</button>
    <button name="rock" onClick={props.handleClick}>Rock</button>

  </div>

}

function OutputMenu(props){

  return <div>

    <p>{props.userChoice}</p>
    <p>{props.computerChoice}</p>
    <br/>
    <p>{props.result}</p>

  </div>

}

function App(){

  let [userChoice, setUserChoice] = useState("User Input");
  let [computerChoice, setComputerChoice] = useState("Computer Choice");
  let [result, setResult] = useState("Result");
  let [wins, setWins] = useState(parseInt(localStorage.getItem("zumthezazaking_rps_wins")) || 0);
  let [defeats, setDefeats] = useState(parseInt(localStorage.getItem("zumthezazaking_rps_defeats")) || 0);

  let computerChoices = ['rock', 'paper', 'scissors'];

  function handleClick(e){
    setUserChoice(e.target.name);

    let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    setComputerChoice(randomChoice);

    switch(e.target.name){
      case "rock":
        if(randomChoice === "paper"){
          setResult("You lose");
          setDefeats(defeats+1);
          localStorage.setItem("zumthezazaking_rps_defeats", parseInt(defeats)+1);
        } else if (randomChoice === "scissors"){
          setResult("You win")
          setWins(wins+1);
          localStorage.setItem("zumthezazaking_rps_wins", parseInt(wins)+1);
        } else {
          setResult("Draw");
        }
        break

      case "paper":
        if(randomChoice === "scissors"){
          setResult("You lose");
          setDefeats(defeats+1);
          localStorage.setItem("zumthezazaking_rps_defeats", parseInt(defeats)+1);
        } else if (randomChoice === "rock"){
          setResult("You win");
          setWins(wins+1);
          localStorage.setItem("zumthezazaking_rps_wins", parseInt(wins)+1);
        } else {
          setResult("Draw")
        }
        break;

      case "scissors":
        if(randomChoice === "rock"){
          setResult("You lose");
          setDefeats(defeats+1);
          localStorage.setItem("zumthezazaking_rps_defeats", parseInt(defeats)+1);
        } else if (randomChoice === "paper"){
          setResult("You win");
          setWins(wins+1);
          localStorage.setItem("zumthezazaking_rps_wins", parseInt(wins)+1);
        } else {
          setResult("Draw")
        }
        break;
    }

  }

  return <div>

    <p>Wins: {wins}</p>
    <p>Defeats: {defeats}</p>

    <ChoiceMenu handleClick={handleClick}/>
    <OutputMenu 
    userChoice={userChoice} 
    computerChoice={computerChoice}
    result={result}
    />

  </div>

}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
