package com.medcare.service;

import com.medcare.dao.UserLoginDaoI;
import com.medcare.model.UserLoginModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserLoginServiceImpl implements UserLoginServiceI{
    @Autowired
    UserLoginDaoI user ;

    @Override
    public UserLoginModel login(UserLoginModel user) {
        return this.user.login(user);
    }

    @Override
    public UserLoginModel saveUser(UserLoginModel user) {
        return this.user.saveUser(user);
    }

    @Override
    public Boolean checkUser(UserLoginModel user) {
        return this.user.checkUser(user);
    }
}