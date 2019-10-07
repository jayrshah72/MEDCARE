package com.medcare.service;

import com.medcare.dao.RegistrationDaoI;
import com.medcare.model.DoctorDetailsModel;
import com.medcare.model.NurseDetailsModel;
import com.medcare.model.UserLoginModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class RegistrationServiceImpl implements RegistrationServiceI{

    @Autowired
    RegistrationDaoI registrationDaoI;

    @Override
    public Map<String, Object> doctorRegister(DoctorDetailsModel doctorToRegister) {
        Map<String,Object> response = new HashMap<>();
        response.put("status", registrationDaoI.register(doctorToRegister));
        return response;
    }

    @Override
    public Map<String, Object> nurseRegister(NurseDetailsModel nurseToRegister) {
        Map<String,Object> response = new HashMap<>();
        response.put("status", registrationDaoI.register(nurseToRegister));
        return response;
    }
}
