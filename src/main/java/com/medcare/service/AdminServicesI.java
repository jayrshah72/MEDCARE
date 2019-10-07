package com.medcare.service;

import com.medcare.model.Medicine;
import com.medcare.model.UserLoginModel;

import java.util.List;
import java.util.Map;

public interface AdminServicesI {
    public List<Medicine> getMedicineList();
    public List<UserLoginModel> getStaffList();
    public List<UserLoginModel> getPatientsList();
    public void removePatient(Long id);
    public void removeMedicine(Long id);
    public Map<String, Object> addNewMedicine(Medicine medicine);
}
