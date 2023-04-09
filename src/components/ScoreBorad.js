import React from 'react'
import "./ScoreBoard.css"
const ScoreBorad = ({scores,xplay}) => {
    const {Xscore,Oscore}=scores;
  return (
    <div className='ScoreBoard'>
      <span className={`score x-score ${!xplay && "inactive"}`}>X - {Xscore}</span>
      <span className={`score o-score ${xplay && "inactive"}`}>O - {Oscore}</span>
    </div>
  )
}

export default ScoreBorad