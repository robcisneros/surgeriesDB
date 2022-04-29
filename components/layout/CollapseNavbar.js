import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import classes from "./CollapseNavbar.module.css";
import Link from "next/link";
const CollapseNavbar = () => {
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
      <Container  className={classes.linkscss}>
        <Link href="/"  as={`/`}>Search for surgeries</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Link href="/" as={`/`}>Home</Link>
            <Link href="/hospital" as={`/hospital`}>Hospitales</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CollapseNavbar;
