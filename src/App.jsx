
import Menu from "../src/Components/Menu"
import Dash from "./Components/Dash"
import Header from "./Components/Header"
import RightBar from "./Components/RightBar"
function App() {


  return (
    <>
    <div className="w-full h-screen bg-sky-100 flex justify-between">
     <Menu/>
     <Dash/>
     <RightBar/>
    </div>
    </>
  )
}

export default App
