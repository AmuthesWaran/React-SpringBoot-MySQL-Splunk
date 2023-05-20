package com.ammu.splunkIntergation.service;

import com.ammu.splunkIntergation.model.Employee;

import java.util.List;

public interface EmployeeService {
    //POST
    public Employee addAnEmployee(Employee employee);
    //GET an Employee
    public Employee findEmployeeById(Integer employeeId);
    // GET all Employee
    public List<Employee> getAllEmployee();
    // PUT an Employee
    public Employee amendAnEmployee(Employee employee);
    //Delete an Employee
    public Employee deleteAnEmployee(Integer employeeId);

}
