import { Container, Nav, Navbar } from "react-bootstrap"
import React, { useContext } from "react";
import AuthContext from '../store/auth-context'
import Button from '../UI/Button/Button'

import classes from "./CollapseNavbar.module.css"
import Link from "next/link";
const CollapseNavbar = () => {
  const ctx = useContext(AuthContext)
  return (
    // <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
    //   <Container>
    //     <Navbar.Brand href="/">Search for surgeries</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="justify-content-end" style={{ width: "100%" }}>
    //         <Nav.Link href="/">Home</Nav.Link>
    //         {ctx.isLoggedIn && <Nav.Link href="/hospital">Hospitales</Nav.Link>}
    //         {ctx.isLoggedIn && <Button onClick={ctx.onLogout}>Logout</Button>}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav className={classes.nav_container}>
      <label className={classes.logo} >Search for surgeries</label>
      <ul>
        <li>
          <Link href="/" as={`/`}>Home</Link>
        </li>
        <li>
          <Link href="/hospital" as={`/hospital`}>Hospital</Link>
        </li>
      </ul>
    </nav>
  )
}
export default CollapseNavbar;
