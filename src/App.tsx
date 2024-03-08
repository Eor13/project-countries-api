// 2 reuse estructure
import { Outlet } from "react-router-dom"
import { NavBar } from "./components/navBar-Page"
import Container from 'react-bootstrap/Container';
import "./app.css";
import { ProviderProps, createContext, useContext, useState } from "react";

export type Theme = "dark" | "light"
export const ThemeContext = createContext<Theme>("dark")

export const useGetTheme = () => useContext(ThemeContext)

function App() {
   const [theme, setTheme] = useState("dark")

  return (
    <>
        <Container fluid className="d-flex flex-column m-auto">
          <ThemeContext.Provider value={{theme, setTheme}}>
            <NavBar setTheme={setTheme} theme ={theme}/>
            <div className='mb-4 invisible' style={{ height: 140 }} ></div>
            <Outlet />

          </ThemeContext.Provider>
        </Container>
    </>
  )
}

export default App
