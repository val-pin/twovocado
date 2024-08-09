"use client";

import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebaseConfig";
import { useRouter } from "next/navigation";

function NavbarWrapper() {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);

        router.push("/");
      })
      .catch((error) => {
        // An error happened.
        console.log("error during logout");
      });
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Sustainable Avocados</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {user ? (
              <>
                {" "}
                <Nav.Link href="feed">Feed</Nav.Link>
                <Button variant="success" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWrapper;
