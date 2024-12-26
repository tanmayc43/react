import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


function MyApp(){
  return(
    <>
      <h1>Custom function</h1>
    </>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'> Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank',},
  'Wanna Search something?'
)

// createRoot(document.getElementById('root')).render(
//   reactElement
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp />
    {reactElement}
    <br />
    {anotherElement}
  </StrictMode>
)

//jsx returns a single element only 
//therefore if you need to return multiple elements, do it in a div
//or you can do it in <></>, which is called a fragment