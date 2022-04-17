import { Container, Nav, Navbar } from "react-bootstrap"
import React, { useContext } from "react";
import AuthContext from '../store/auth-context'
import Button from '../UI/Button/Button'
const CollapseNavbar = () => {
  const ctx = useContext(AuthContext)
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Search for surgeries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/">Hospitales</Nav.Link>
            {ctx.isLoggedIn && <Nav.Link href="/procedimientos">Procedimientos</Nav.Link>}
            {ctx.isLoggedIn && <Button onClick={ctx.onLogout}>Logout</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CollapseNavbar;
