import { useState, useEffect} from 'react'
import './App.css'

function App() { 

  const [counter, setCounter] = useState(0)

  const colors = ["red", "yellow", "blue"]

  const addOne = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
  },[])

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 3)
    document.body.style.backgroundColor = colors[randomColor]
    console.log("i'm changing the background")
  },[counter])
  return (
    <>
      <h1>Hello World</h1>
      <h2>{counter}</h2>
      <button onClick={()=> addOne()}></button>
    </>
  )
}

export default App;
