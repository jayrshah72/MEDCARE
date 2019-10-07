package com.medcare.service;

import com.medcare.dao.AdminDaoI;
import com.medcare.model.Medicine;
import com.medcare.model.UserLoginModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AdminServicesImpl implements AdminServicesI {
    @Autowired
    AdminDaoI adminDaoI;

    @Override
    public List<Medicine> getMedicineList() {
        List<Medicine> medicines = adminDaoI.medicines();
        if(!(medicines.isEmpty())){
            return medicines;
        }
        else {
            return null;
        }
    }

    @Override
    public List<UserLoginModel> getStaffList() {
        List<UserLoginModel> staffMembers = adminDaoI.staffMembers();
        if(!(staffMembers.isEmpty())){
            return staffMembers;
        }
        else {
            return null;
        }
    }

    @Override
    public List<UserLoginModel> getPatientsList() {
        List<UserLoginModel> patients = adminDaoI.patients();
        if(!(patients.isEmpty())){
            return patients;
        }
        else {
            return null;
        }
    }

    @Override
    public void removePatient(Long id) {
        adminDaoI.removePatient(id);
    }

    @Override
    public void removeMedicine(Long id) {
        adminDaoI.removeMedicine(id);
    }

    @Override
    public Map<String, Object> addNewMedicine(Medicine medicine) {
        Map<String, Object> response = new HashMap<>();
        response.put("status", adminDaoI.addNewMedicine(medicine));
        return response;
    }
}
