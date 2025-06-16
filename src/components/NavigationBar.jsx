import React from "react";
import { Link } from "react-router-dom";
import { BiPlus, BiShow } from "react-icons/bi";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="black" data-bs-theme="dark" sticky="top" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <Navbar.Brand>
            <img
              alt=""
              src="./favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Invoice Manager{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link
              to="/"
              type="button"
              className="btn btn-light me-3 rounded-pill"
            >
              <BiShow /> View Invoices
            </Link>
            <Link
              to="/create"
              type="button"
              className="btn btn-primary rounded-pill"
            >
              <BiPlus /> Add Invoice
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
