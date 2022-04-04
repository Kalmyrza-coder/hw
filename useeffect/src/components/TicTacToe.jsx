import {useState, useEffect} from 'react'

function TicTacToe() {
    const [board, setBoard] = useState([
        {id:1, field:' '},
        {id:2, field:' '},
        {id:3, field:' '},
        {id:4, field:' '},
        {id:5, field:' '},
        {id:6, field:' '},
        {id:7, field:' '},
        {id:8, field:' '},
        {id:9, field:' '}
    ])
    const [turn, setTurn] = useState(true)

    const restartGame = () => {
        setBoard([
            {id:1, field:' '},
            {id:2, field:' '},
            {id:3, field:' '},
            {id:4, field:' '},
            {id:5, field:' '},
            {id:6, field:' '},
            {id:7, field:' '},
            {id:8, field:' '},
            {id:9, field:' '}
        ])
    }

    const handleClick = (id) => {
        if (board[id - 1].field !== ' ') {
            return;
        }
        const symbol = turn ? "X" : "O" 
        const newBoard = [...board]
        newBoard[id - 1].field = symbol
        
        setBoard(newBoard)

        setTurn(!turn)
    }
    return (
        <>
        <h1>Tic Tac Toe</h1>
        <div className='board'>
            {board.map((square)=>{
                return(<div className='square' onClick={()=> handleClick(square.id)}>{square.field}</div>)
            })}
        </div>
        <button onClick={()=> restartGame()}>Reset</button>
        </>
    )
}

export default TicTacToe;