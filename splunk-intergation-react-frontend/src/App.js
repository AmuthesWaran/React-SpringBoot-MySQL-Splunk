import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return (
    <div >

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Splunk-Integration</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>New Employee</Nav.Link>
              <Nav.Link>Update Employee</Nav.Link>
              <Nav.Link>Delete Employee</Nav.Link>
              <Nav.Link>Employee Records</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default App;
