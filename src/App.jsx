import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2" >
          <button 
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor: "Red"}}
          >Red</button>
          <button 
          onClick={() => setColor("Green")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button 
          onClick={() => setColor("White")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{backgroundColor: "White"}}
          >White</button>
          <button 
          onClick={() => setColor("Blue")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{backgroundColor: "pink"}}
          >pink</button>
          <button 
          onClick={() => setColor("Gray")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor: "Gray"}}
          >Gray</button>
          <button 
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor: "Purple"}}
          >Purple</button>
          <button 
          onClick={() => setColor("Lavender")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
          style={{backgroundColor: "Lavender"}}
          >Lavender</button>
          <button 
          onClick={() => setColor("Black")}
          className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
          style={{backgroundColor: "Black"}}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
