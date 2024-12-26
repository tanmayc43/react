import { useState } from 'react'
//hook import
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [cnt, setCounter] = useState(10)
  //let cnt = 5
  //the cnt in array will actually propagate the changes to ui when updated
  //setCounter method is responsible to update cnt

  const addValue = () => {
    //console.log('clicked ' + cnt)
    cnt+=1
    if(cnt>20) {
      cnt=20
      setCounter(cnt)
    }
    else setCounter(cnt)
  }

  const remValue = () => {
    //console.log('clicked ' + cnt)
    cnt-=1
    if(cnt<0) {
      cnt=0
      setCounter(cnt)
    }
    else setCounter(cnt)
  }

  return(
    <>
    <h1>K.</h1>
    <h2>Counter value : {cnt}</h2>

    <button onClick = {addValue}  
    >Increase Value</button>

    <button onClick= {remValue}
    >Decrease Value</button>
    </>
  )
}

export default App
