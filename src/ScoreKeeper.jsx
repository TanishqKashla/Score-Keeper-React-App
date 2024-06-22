import { useState } from "react"
import "./ScoreKeeper.css"

export default function ScoreKeeper({numPlayers=3, target=5}) {

    const [scores, setScores] = useState(new Array(numPlayers).fill(0));

    const increaseScore = (index) => {



        setScores((prevScore) => {
            return prevScore.map((score, i) => {
                if (i===index) return score + 1;
                return score
            })
        })
    }

    const resetScores = () => {
        setScores(new Array(numPlayers).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, index) => {
                    return <li className="playerList" key={index}>Player{index+1} : {score}
                    <button onClick={() => {increaseScore(index)}}>+1</button>
                    {score>=target && <p>WINNER!!</p>}
                    </li>
                })}
            </ul>
            <button className="resetButton" onClick={resetScores}>Reset Scores</button>
        </div>
    )



}