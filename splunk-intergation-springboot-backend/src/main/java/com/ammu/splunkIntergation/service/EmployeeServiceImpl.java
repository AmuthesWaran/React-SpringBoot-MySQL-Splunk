package com.ammu.splunkIntergation.service;

import com.ammu.splunkIntergation.model.Employee;
import com.ammu.splunkIntergation.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements  EmployeeService {

    @Autowired
    EmployeeRepository empRepo;

    @Override
    public Employee addAnEmployee(Employee employee) {
        return empRepo.save(employee);
    }

    @Override
    public Employee findEmployeeById(Integer employeeId) {
        if(empRepo.findById(employeeId).isPresent()){
            return empRepo.findById(employeeId).get();
        }
        return null;

    }

    @Override
    public List<Employee> getAllEmployee() {
        return empRepo.findAll();
    }

    @Override
    public Employee amendAnEmployee(Employee employee) {
        return null;
    }

    @Override
    public Employee deleteAnEmployee(Integer employeeId) {
        Employee deletedEmp = null;
        if(empRepo.findById(employeeId).isPresent()){
            deletedEmp = empRepo.findById(employeeId).get();
        }
        empRepo.deleteById(employeeId);
        return deletedEmp;
    }
}
