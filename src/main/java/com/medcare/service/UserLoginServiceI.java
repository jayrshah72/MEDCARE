package com.medcare.service;

import com.medcare.model.UserLoginModel;

public interface UserLoginServiceI {
    public UserLoginModel login(UserLoginModel user);
    public UserLoginModel saveUser(UserLoginModel user);
    public Boolean checkUser(UserLoginModel user);
}
