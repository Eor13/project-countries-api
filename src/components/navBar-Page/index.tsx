import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Nav, NavbarBrand, Button, Navbar } from 'react-bootstrap';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';
import { Theme } from '../../App';


const NavBar = (theme:Theme,setTheme:Dispatch<SetStateAction<Theme>>) => {

    const toggleButton = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    // const toggleMode = () => {
    
    //     const toggle= document.getElementById('toggle')
    //     toggle?.addEventListener("click",() =>{
    //         let htmlElement = document.getElementsByTagName("html")[0].dataset.bsTheme
    //         htmlElement = htmlElement === "dark" ? "light" : "dark"
    //         console.log(htmlElement)

    //         // let iconTheme =document.querySelector(`[icon=${}]`)
    //     })
    // }


    return (
        <Row className='p-4 border border-0 border-bottom border-5 fixed-top border-secundary border-opacity-50'>
            <Navbar className='d-flex mx-5 mb-2' >
                    <NavbarBrand className='col-9'>Where in the world?</NavbarBrand>
                    <Nav className='col border bg-transparent text-dark border-0'>
                        <Button type="button" className='button p-2 gap-1' id='toggle' onClick={toggleButton} >
                            <FontAwesomeIcon icon={faMoon} />
                            <span className='px-lg-1'>Dark Model</span>
                        </Button>
                    </Nav>
            </Navbar>

        </Row>

    )
}


export { NavBar };