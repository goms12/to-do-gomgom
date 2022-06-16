import { Link } from "react-router-dom"

import { Navbar, Container, Nav } from 'react-bootstrap'

export default function MainNavbar() {
    return (<div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
                <Nav className="me-auto">
                <Link to={'/'}><Nav.Link href="#home">Home</Nav.Link></Link>
                <Link to={'/todo'}><Nav.Link href="#features">To Do</Nav.Link></Link>
                </Nav>
            </Container>
        </Navbar>
    </div>);
}