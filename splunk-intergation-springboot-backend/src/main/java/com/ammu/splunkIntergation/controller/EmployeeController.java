package com.ammu.splunkIntergation.controller;

import com.ammu.splunkIntergation.model.Employee;
import com.ammu.splunkIntergation.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    EmployeeService empServ;

    @GetMapping("/")
    public String sayHello(){
        return "Hello World";
    }
    @GetMapping("/{empId}")
    public ResponseEntity<Employee> getAnEmployee(@PathVariable Integer empId){
        return new ResponseEntity<Employee>(empServ.findEmployeeById(empId), HttpStatus.OK);
    }

    @PostMapping("/employee")
    public ResponseEntity<Employee> SaveAnEmployee(@RequestBody Employee employee){
        return new ResponseEntity<Employee>(empServ.addAnEmployee(employee), HttpStatus.ACCEPTED);
    }

    @GetMapping("/employee")
    public ResponseEntity<List<Employee>> getAllEmployee(){
        return new ResponseEntity<List<Employee>>(empServ.getAllEmployee(), HttpStatus.OK);
    }


}
