package com.ammu.splunkIntergation.service;

import com.ammu.splunkIntergation.model.Employee;
import com.ammu.splunkIntergation.repository.EmployeeRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class EmployeeServiceImpl implements  EmployeeService {

    Logger logger = LogManager.getLogger(EmployeeServiceImpl.class);

    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
    LocalDateTime now = LocalDateTime.now();

    @Autowired
    EmployeeRepository empRepo;

    @Override
    public Employee addAnEmployee(Employee employee) {
        logger.info("New Employee is saved. Employee ID is: {}", employee.getEmployeeID());
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
        logger.info("All employee details accessed at: {}", dtf.format(now));
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

        logger.info("An Employee is deleted. Employee ID: {}", deletedEmp.getEmployeeID());
        return deletedEmp;
    }
}
