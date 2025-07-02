import { Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";


function App() {

  return (
    <>
     <Routes> 
      <Route index="/"  element={<StartGame/>}/>
      <Route path="/play" element={<PlayGame/>} />
     </Routes>
    </>
  )
}

export default App
