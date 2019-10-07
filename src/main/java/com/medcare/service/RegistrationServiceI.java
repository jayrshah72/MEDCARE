package com.medcare.service;

import com.medcare.model.DoctorDetailsModel;
import com.medcare.model.NurseDetailsModel;
import com.medcare.model.PatientDetailsModel;
import com.medcare.model.UserLoginModel;

import java.util.Map;

public interface RegistrationServiceI {
    Map<String,Object> doctorRegister(DoctorDetailsModel doctorToRegister);
    Map<String,Object> nurseRegister(NurseDetailsModel nurseToRegister);
}
