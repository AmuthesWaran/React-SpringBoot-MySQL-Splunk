package com.ammu.splunkIntergation.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Employee {

    @Id
    private Long EmployeeID;
    private String FirstName;
    private String LastName;
    private String Email;
    private String MobileNumber;
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate HireDate;
    private String DepartmentName;
    private String Location;
    private BigDecimal Salary;


}
