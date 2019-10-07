package com.medcare.dao;

import com.medcare.model.UserLoginModel;

public interface UserLoginDaoI {
    public UserLoginModel login(UserLoginModel user);

    public UserLoginModel saveUser(UserLoginModel user);

    public Boolean checkUser(UserLoginModel user);
}