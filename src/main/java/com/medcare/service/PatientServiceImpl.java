package com.medcare.service;

import com.medcare.dao.PatientDaoI;
import com.medcare.model.PatientPaymentModel;
import com.medcare.model.PrescriptionModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    PatientDaoI patientDaoI;

    @Override
    public Map<String, Object> prescriptionList(int patientId) {
        Map<String, Object> map = new HashMap<>();
        map.put("prescriptionList",patientDaoI.getPatientsPrescription(patientId));
        map.put("status",true);
        return map;
    }

    @Override
    public Map<String, Object> billDetails(Long patientId) {
        Map<String, Object> map = new HashMap<>();
        map.put("billDetails",patientDaoI.getBillInfo(patientId));
        map.put("status",true);
        return map;
    }

    @Override
    public Map<String, Object> paymentInsertion(PatientPaymentModel paymentData) {
        Map<String, Object> map = new HashMap<>();
        map.put("paymentDetails", patientDaoI.paymentInserting(paymentData));
        map.put("status", true);
        return map;
    }

    @Override
    public Map<String, Object> prescriptionInsertion(Map<String, Object> prescriptionData) {
        Map<String, Object> map = new HashMap<>();
        if (prescriptionData.isEmpty()) {
            map.put("status", false);
        } else {

            map.put("prescriptionDetails", patientDaoI.prescriptionInserting(prescriptionData));
            map.put("status", true);
        }
        return map;
    }

    @Override
    public Map<String, Object> medicineSuggestion(String medicine) {
        Map<String, Object> map = new HashMap<>();
        if(medicine.equals(null)){
            map.put("status", false);
        }
        else{
            map.put("medicines", patientDaoI.medicineSuggesting(medicine));
            map.put("status", true);
        }
        return map;
    }

    @Override
    public Map<String, Object> patientPrescriptionId(Integer prescriptionId) {
        Map<String, Object> map = new HashMap<>();
        map.put("genericPrescriptionsList",patientDaoI.patientPrescriptionId(prescriptionId));
        System.out.println("Prescription ID: " + prescriptionId);
        map.put("status",true);
        return map;
    }

    @Override
    public Map<String, Object> getUserById(Long id) {
        Map<String, Object> map = new HashMap<>();
        map.put("user",patientDaoI.getUserById(id));
        map.put("status",true);
        return map;
    }

}
