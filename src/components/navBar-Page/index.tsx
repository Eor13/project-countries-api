import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Nav, NavbarBrand, Button, Navbar } from 'react-bootstrap';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import { Dispatch, SetStateAction } from 'react';

const NavBar = (theme: string, setTheme: Dispatch<SetStateAction<string>>) => {

    const toggleButton = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        console.log(theme)
    }
    return (
        <Row className='p-4 border border-0 border-bottom border-5 fixed-top border-secundary border-opacity-50'>
            <Navbar className='d-flex mx-5 mb-2' >
                    <NavbarBrand className='col-9'>Where in the world?</NavbarBrand>
                    <Nav className='col border bg-transparent text-dark border-0'>
                        <Button type="button" className='button p-2 gap-1' id='toggle' onClick={toggleButton} >
                            <FontAwesomeIcon icon={ theme ? faMoon : faSun}/>
                            <span className='px-lg-1'>{theme ?'Dark Mode':'Light Mode'}l</span>
                        </Button>
                    </Nav>
            </Navbar>
        </Row>
    )
}


export { NavBar };