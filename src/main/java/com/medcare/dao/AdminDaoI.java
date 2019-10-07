package com.medcare.dao;

import com.medcare.model.Medicine;
import com.medcare.model.UserLoginModel;

import java.util.List;

public interface AdminDaoI {
    public List<Medicine> medicines();
    public List<UserLoginModel> staffMembers();
    public List<UserLoginModel> patients();
    public void removePatient(Long id);
    public void removeMedicine(Long id);
    public Boolean addNewMedicine(Medicine medicine);
}
