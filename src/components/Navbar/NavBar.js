import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './cartwidget/CartWidget';
import logo from "./images/logo.jpg"
import "./NavBar.scss"

function NavBar() {
    return (
        <>
       <Navbar bg="light" variant="light">
        <Container>
          <img className= "logoStyle" src={logo} alt=""/>
          <Nav className="mx-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#features">Almohadones</Nav.Link>
            <Nav.Link href="#manteles">Manteles</Nav.Link>
            <Nav.Link href="#bolsos">Bolsos</Nav.Link>
          </Nav>
          <Cartwidget/>
        </Container>
      </Navbar>
      </>
    );
}
export default NavBar;