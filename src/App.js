import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"

function App() {
  
  return (
    <>
    <BrowserRouter>
      <div className="App">
      <Routes>   
        <Route path="/" element={ <Home /> } /> 
      </Routes>
      </div>
     </BrowserRouter>
     </>
  )
  
}

export default App


// npm install --save react-router-dom
// npx json-server --watch public/data.json --port 8000