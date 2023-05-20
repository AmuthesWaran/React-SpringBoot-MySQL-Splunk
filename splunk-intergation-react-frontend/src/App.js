import React, { useState } from 'react';
import './App.css';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

function App() {

  const departmentList = ['Beijing', 'Bern', 'Mumbai', 'Chennai', 'Geneva', 'Hiroshima', 'London', 'Munich', 'Sao Paulo', 'Seattle', 'Sydney', 'Tokyo']


  const [selectedDepartmentList, setSelectedDepartmentList] = useState('Beijing')
  console.log(selectedDepartmentList);

  return (
    <div >

      <Container>
        <Row className="mt-4  pt-4">
          <Col lg={4} md={6} sm={9} className="p-3 m-auto shadow-lg bg-light">

            <Form className='bg-light'>
              <h4 className='text-center' >Employee Portal</h4>

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
              <FloatingLabel controlId="DepartmentName" label="Department Name" className="mb-3" autoComplete="off" >
                <Form.Select name='Department Name' onChange={e => setSelectedDepartmentList(e.target.value)}>

                  {
                    departmentList.map(list => (
                      <option key={list} >{list}</option>
                    ))
                  }
                </Form.Select>
              </FloatingLabel>

              <FloatingLabel controlId="Location" label="Location" className="mb-3" autoComplete="off" >
                <Form.Control type="text" placeholder="Location"

                />
                <Form.Control.Feedback type='invalid'>
                </Form.Control.Feedback>

              </FloatingLabel>

              <div className='text-center span2'>

                <Button type='submit' variant="primary" className='mb-2 mt-2 m-2 btn-block' >Add</Button>
                <Button type='reset' variant="danger" className='mb-2 mt-2 m-2 btn-block' >Delete</Button>
                <Button type='reset' variant="warning" className='mb-2 mt-2 m-2 btn-block' >Update</Button>
                <Button type='reset' variant="warning" className='mb-2 mt-2 m-2 btn-block' >Refresh</Button>

              </div>

            </Form>

          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default App;
