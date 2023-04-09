
import './App.css';
import React,{useState} from 'react';
import Board from './components/Board';
import ScoreBorad from './components/ScoreBorad';
import ResetButton from './components/ResetButton';
function App() {
  // const board = ["X","O","X","X","X","O","X","X","X"];
  
  
  const [board,setBoard]=useState(Array(9).fill(null))
  const [xplay,setXplay]=useState(true);
  const [scores,setScores]=useState({Xscore:0,Oscore:0});
  const [gameOver,setGameOver]=useState(false);
  const [display,setdisplay]=useState("");
  const win_combination=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  const check_win=(board)=>{
    for(let i=0;i<win_combination.length;i++){
      const [x,y,z]=win_combination[i];
      // console.log(board[x],board[y],board[z]);
      if(board[x]&&board[x]===board[y]&&board[y]===board[z]){
        console.log(board[x])
        return board[x];
      }
    }
  };
  const handleClick=(boxindex)=>{
     const updatedboard = board.map((value,index)=>{
        if(index===boxindex)
          return xplay?"X":"O";
        else
          return value;
     });
     const winner = check_win(updatedboard);
     if(winner){
      let {Xscore,Oscore}=scores;
      if(winner==="X"){
        Xscore+=1;
        setScores({...scores,Xscore});
      }
      else if(winner==="O"){
        Oscore+=1;
        setScores({...scores,Oscore});
      }
      setdisplay(winner);
      setGameOver(true);
     }
     console.log(scores);
     setXplay(!xplay);
     setBoard(updatedboard);
  };
  const resetBoard=()=>{
    setdisplay("")
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }
  return (
    <div className="App">
    <div className='display-winner'>
    <h1 className={`${display}`}>{gameOver?` Winner is ${display}`:""}</h1>
    </div>
        
        <ScoreBorad scores={scores} xplay={xplay}/>
        <Board board={board} onClick={gameOver?resetBoard : handleClick}></Board>
        <ResetButton resetBoard={resetBoard}/>
        <marquee behavior="scroll" direction="left">Tick Tac Toe &#169; 2023 Vamshidhar </marquee>
    </div>
  );
}

export default App;
