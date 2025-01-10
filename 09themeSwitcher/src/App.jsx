import './App.css'
import React, {useEffect, useState} from 'react'
import { ThemeProvider } from './contexts/Theme'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    return setThemeMode("light")
  }
  const darkTheme = () => {
    return setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
    return (
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <>
          <h1 className='p-4 bg-blue-700 text-3xl text-white'>React</h1>
          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Button />
                </div>
                <div className="w-full max-w-sm mx-auto">
                  <Card />
                </div>
              </div>
          </div>
        </>
      </ThemeProvider>
    )
  
}

export default App
