import React from "react";
import { Container } from "react-bootstrap";
import "../styles/App.scss";
import "../styles/index.scss";

export default function NotFound() {
  return (
    <Container
      className="d-flex h-100 bg-dark text-light align-items-center justify-content-center"
      fluid
    >
      <p style={{ fontSize: "30vw" }}>404</p>
      <p style={{ fontSize: "10vw", textAlign: "center" }}>NOT FOUND</p>
    </Container>
  );
}
