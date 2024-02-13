import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Num, SetNum] = useState(15)


  const addVal = () => {

    SetNum(Num + 1)
  }

  const rmVal = () => {
    if (Num > 0) {
      SetNum(Num - 1)
    }

  }




  return (
    <>
      <h1>Counter App</h1>
      <h3>My Number Is : {Num}</h3>
      <button
        onClick={addVal}
      >Add Me</button>
      <br />
      <br />
      <button
        onClick={rmVal}
      >Remove</button>
    </>
  )
}

export default App
