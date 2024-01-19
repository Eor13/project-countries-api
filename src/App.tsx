// 2 reuse estructure
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/navBar-Page"
import "./app.css";

function App() {

  return (
    
    <main>
      <NavBar/>
      <Outlet/>
    </main>
  )
}

export default App
