import React, { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const NewEmployeeUpdate = () => {

    const departmentList = ['Administration', 'Executive', 'Finance', 'Human Resources', 'IT', 'Marketing', 'Operations', 'Sales']

    const locationList = ['Beijing', 'Bern', 'Mumbai', 'Chennai', 'Geneva', 'Hiroshima', 'London', 'Munich', 'Sao Paulo', 'Seattle', 'Sydney', 'Tokyo']


    const [selectedDepartmentList, setSelectedDepartmentList] = useState('Beijing')
    const [selectedLocationList, setSelectedLocationList] = useState('Administration')
    console.log(selectedDepartmentList);
    console.log(selectedLocationList);

    return (
        <div>
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

                            <Form.Select name='Department Name' className="mb-3" onChange={e => setSelectedDepartmentList(e.target.value)}>

                                {
                                    departmentList.map(list => (
                                        <option key={list} >{list}</option>
                                    ))
                                }
                            </Form.Select>
                            {/* </FloatingLabel> */}


                            <Form.Select name='Location' className="mb-3" onChange={e => setSelectedLocationList(e.target.value)}>

                                {
                                    locationList.map(list => (
                                        <option key={list} >{list}</option>
                                    ))
                                }
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>
                            </Form.Control.Feedback>

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
    )
}

export default NewEmployeeUpdate