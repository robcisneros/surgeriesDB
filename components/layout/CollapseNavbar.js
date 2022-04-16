import { Container, Nav, Navbar } from "react-bootstrap"

const CollapseNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Search for surgeries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/">Hospitales</Nav.Link>
            <Nav.Link href="/procedimientos">Procedimientos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default CollapseNavbar;
