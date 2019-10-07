package com.medcare.model;

import java.math.BigInteger;
import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="user")
public class UserLoginModel {

    @Id
    @GeneratedValue
    private int id;

    @Column(name="user_name")
    private String username;

    @Column(name="address")
    private String address;

    @Column(name="sex")
    private String sex;

    @Column(name="birthdate")
    private Date birthdate;

    @Column(name="email ")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "phno")
    private BigInteger phno;

    @Column(name = "type")
    private String type;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public BigInteger getPhno() {
        return phno;
    }

    public void setPhno(BigInteger phno) {
        this.phno = phno;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}