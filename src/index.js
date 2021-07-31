import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useRef } from 'react';
import './style.css';
import reportWebVitals from './reportWebVitals';

function ChoiceMenu(props){
  
  return <div id="choice" ref={props.choiceClass}>

    <img name="paper" onClick={props.handleClick}/>
    <img name="scissors" onClick={props.handleClick}/>
    <img  name="rock" onClick={props.handleClick}/>

  </div>

}

function OutputMenu(props){

  return <div id="output" className="hide" ref={props.outputClass}>

    <div id="fight">
      <p>You</p>
      <img src="" name="userImage" ref={props.userImage}/>
      <p>VS</p>
      <img src="" name="computerImage" ref={props.computerImage}/>
      <p>CPU</p>
      
    </div>

    <br/>
    <p className="result">{props.result}</p>
    <button onClick={props.playAgain}>Play Again</button>

  </div>

}

function App(){

  let [userChoice, setUserChoice] = useState("User Input");
  let [computerChoice, setComputerChoice] = useState("Computer Choice");
  let [result, setResult] = useState("Result");
  let [wins, setWins] = useState(parseInt(localStorage.getItem("zumthezazaking_rps_wins")) || 0);
  let [defeats, setDefeats] = useState(parseInt(localStorage.getItem("zumthezazaking_rps_defeats")) || 0);

  let userImage = useRef();
  let computerImage = useRef();
  let choiceClass = useRef();
  let outputClass = useRef();

  let computerChoices = ['rock', 'paper', 'scissors'];

  function handleClick(e){
    choiceClass.current.className = "hide";
    outputClass.current.className = "";
    
    setUserChoice(e.target.name);

    let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    setComputerChoice(randomChoice);

    switch(e.target.name){
      case "rock":
        userImage.current.className = "rock";
        if(randomChoice === "paper"){
          computerImage.current.className = "paper";
          setResult("You lose");
          setDefeats(defeats+1);
          localStorage.setItem("zumthezazaking_rps_defeats", parseInt(defeats)+1);
        } else if (randomChoice === "scissors"){
          computerImage.current.className = "scissors";
          setResult("You win")
          setWins(wins+1);
          localStorage.setItem("zumthezazaking_rps_wins", parseInt(wins)+1);
        } else {
          computerImage.current.className = "rock";
          setResult("Draw");
        }
        break

      case "paper":
        userImage.current.className = "paper";
        if(randomChoice === "scissors"){
          computerImage.current.className = "scissors";
          setResult("You lose");
          setDefeats(defeats+1);
          localStorage.setItem("zumthezazaking_rps_defeats", parseInt(defeats)+1);
        } else if (randomChoice === "rock"){
          computerImage.current.className = "rock";
          setResult("You win");
          setWins(wins+1);
          localStorage.setItem("zumthezazaking_rps_wins", parseInt(wins)+1);
        } else {
          computerImage.current.className = "paper";
          setResult("Draw")
        }
        break;

      case "scissors":
        userImage.current.className = "scissors";
        if(randomChoice === "rock"){
          computerImage.current.className = "rock";
          setResult("You lose");
          setDefeats(defeats+1);
          localStorage.setItem("zumthezazaking_rps_defeats", parseInt(defeats)+1);
        } else if (randomChoice === "paper"){
          computerImage.current.className = "paper";
          setResult("You win");
          setWins(wins+1);
          localStorage.setItem("zumthezazaking_rps_wins", parseInt(wins)+1);
        } else {
          computerImage.current.className = "scissors";
          setResult("Draw")
        }
        break;

      default:
        alert("There was a problem generating the output");
        window.location.reload();
    }

  }


  function playAgain(){
    choiceClass.current.className = "";
    outputClass.current.className = "hide";
  }

  return <div id="mainContainer">

    <p>Wins: {wins}</p>
    <p>Defeats: {defeats}</p>

    <div id="container">
      <ChoiceMenu handleClick={handleClick} choiceClass={choiceClass}/>
      <OutputMenu 
      userChoice={userChoice} 
      computerChoice={computerChoice}
      result={result}
      userImage={userImage}
      computerImage={computerImage}
      outputClass={outputClass}
      playAgain={playAgain}
    />
    </div>

  </div>

}


const el = <App/>;

ReactDOM.render(el, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
