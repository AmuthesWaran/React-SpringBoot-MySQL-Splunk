import React from 'react';
import './App.css';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

function App() {
  return (
    <div >

      <Container>
        <Row className="mt-4  pt-4">
          <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg rounded-lg bg-light">

            <Form className='bg-light'>
              <h4 className='text-center ' >Employee Portal</h4>

              <FloatingLabel controlId="EmployeeID" label="Employee ID" className="mb-3" autoComplete="off" >
                <Form.Control type="number" placeholder="1234567"
                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel controlId="FirstName" label="First Name" className="mb-3" autoComplete="off" >
                <Form.Control type="text" placeholder="First Name"

                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <FloatingLabel controlId="LastName" label="Last Name" className="mb-3" autoComplete="off" >
                <Form.Control type="text" placeholder="Last Name"

                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <FloatingLabel controlId="MobileNumber" label="Mobile Number" className="mb-3" autoComplete="off" >
                <Form.Control type="number" placeholder="Mobile Number"
                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <FloatingLabel controlId="HireDate" label="Hire Date" className="mb-3" autoComplete="off" >
                <Form.Control type="date" placeholder="Hire Date"
                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <FloatingLabel controlId="DepartmentName" label="Department Name" className="mb-3" autoComplete="off" >
                <Form.Control type="text" placeholder="Department Name"

                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <FloatingLabel controlId="Location" label="Location" className="mb-3" autoComplete="off" >
                <Form.Control type="text" placeholder="Location"

                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <div className='text-center span2'>

                <Button type='submit' variant="primary" className='mb-2 mt-2 m-3 btn-block' >Sign Up</Button>
                <Button type='reset' variant="warning" className='mb-2 mt-2 btn-block' >Reset</Button>

              </div>

            </Form>

          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default App;
