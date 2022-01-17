/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Jumbotron,
  fluid,
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Data from "./data.js"; //다른 파일 import

function App() {

  let [items, setItems] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">coffeeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main">
        <h1>30% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <div className="container">
        <div className="row">
          {
            items.map((item, i)=>{
              return (
                <Card item={item} i={i} key={i}></Card>
              ) 
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props){ 
  return(
    <div className="col-md-4">
      <img src={"../img/coffee"+ (props.i+1) +".jpg"} className="items" />
      <h4>{props.item.title}</h4>
      <p>{props.item.content} & {props.item.price}</p>
    </div>
  )
}


export default App;
