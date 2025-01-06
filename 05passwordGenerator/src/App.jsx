import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [special, setSpecial] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(special) str+="!@#$%^&*"

    for (let i=1; i<=length;i++) {
      pass+=str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
  } , [length, number, special, setPassword])
  
  const copyPasswordToClipboard = useCallback(() => {
    //window object available on react but not on nextjs because of server side rendering
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, special, passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-6 text-orange-700 bg-gray-700">
      <h1 className="text-center text-white">Password Generator</h1>
      <div className="flex shadow rounded-xl overflow-hidden mb-4 my-3">
        <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-800 text-orange-700 px-3 py-1 shrink-0"> Copy </button>
      </div>
      <div className="flex test-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" 
            min={4}
            max={24}
            value={length}
            className='cursor-pointer'
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={()=>{
              setNumber((prev) => !prev)
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={special}
            id="specialInput"
            onChange={()=>{
              setSpecial((prev) => !prev)
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default App
