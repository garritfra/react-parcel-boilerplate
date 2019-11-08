import React, { Component } from "react";
import styled from "styled-components";
import "../styles/app.scss";

const Container = styled.div`
  text-align: center;
`;

export default function App() {
  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
}
