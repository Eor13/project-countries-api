// 2 reuse estructure
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/navBar-Page"
import Container from 'react-bootstrap/Container';
import "./app.css";
import { createContext, useState } from "react";


const ThemeContext = createContext("dark")

function App() {
   const [theme, setTheme] = useState("dark")
  return (
    <>
        <Container fluid className="d-flex flex-column m-auto">
          <ThemeContext.Provider value={theme}>
            <div>
              <NavBar setTheme={setTheme} theme={theme}/>
              <div className='mb-4 invisible' style={{ height: 140 }} ></div>
              <Outlet />
            </div>
          </ThemeContext.Provider>
        </Container>
    </>
  )
}

export default App
