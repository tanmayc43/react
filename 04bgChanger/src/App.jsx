import { useState } from "react"

function App() {
  const [bgColor, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-500" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-col justify-center left-12 inset-y-0 py-2">
        <div className="flex flex-col gap-3 shadow- px-2 py-3 rounded-3xl">
          <button onClick={() => setColor("Red")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Red" }}> Red </button>
          <button onClick={() => setColor("Green")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Green" }}> Green </button>
          <button onClick={() => setColor("Orange")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Orange" }}> Orange </button>
          <button onClick={() => setColor("Blue")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Blue" }}> Blue </button>
          <button onClick={() => setColor("Olive")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Olive" }}> Olive </button>
          <button onClick={() => setColor("Purple")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Purple" }}> Purple </button>
          <button onClick={() => setColor("Lavender")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Lavender" }}> Lavender </button>
          <button onClick={() => setColor("Black")} className="outline-none py-4 px-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "Black" }}> Black </button>
        </div>
      </div>
    </div>
  )
}

export default App
