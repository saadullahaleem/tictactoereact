import React from 'react'

import Cell from './Cell'

import { useState } from 'react'

const Board = () => {

  const [player, setPlayer] = useState('X')
  const [cells, setCells] = useState(Array(9).fill(''))

  const checkWinner = (cells) => {
    const lines = [
      [0, 1, 2], // horizontal
      [3, 4, 5], // horizontal
      [6, 7, 8], // horizontal
      [0, 3, 6], // vertical
      [1, 4, 7], // vertical
      [2, 5, 8], // vertical
      [0, 4, 8], // diagonal
      [2, 4, 6] // diagonal
    ]

    for (const line of lines) {
      const [a, b, c] = line
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        alert(`${cells[a]} wins!`)
        setCells(Array(9).fill(''))
        setPlayer('X')
      }
    }
  }

  const handleClick = (index) => {
    if (cells[index] !== '') return

    const newCells = [...cells]
    newCells[index] = player
    setCells(newCells)
    setPlayer(player === 'X' ? 'O' : 'X')
    checkWinner(newCells)
  }

  return <div className='board'>
    {cells.map((cell, index) => <Cell key={index} value={cell} onClick={() => handleClick(index)} />)}
  </div>
}

export default Board