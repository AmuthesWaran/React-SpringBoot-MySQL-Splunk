package com.ammu.splunkIntergation.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="empid")
    private Integer empid;
    @Column(name="firstname")
    private String firstName;
    @Column(name="lastname")
    private String lastName;
    private String email;
    @Column(name="mobileno")
    private String mobileNo;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name="hiredate")
    private LocalDate hireDate;
    @Column(name="deptname")
    private String deptName;
    private String location;
    private BigDecimal salary;


}
