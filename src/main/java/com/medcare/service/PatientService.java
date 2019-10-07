package com.medcare.service;

import com.medcare.model.PatientPaymentModel;
import com.medcare.model.PrescriptionModel;

import java.util.Map;

public interface PatientService {
    public Map<String, Object> prescriptionList(int patientId);
    public Map<String, Object> billDetails(Long patientId);
    public Map<String, Object> paymentInsertion(PatientPaymentModel paymentData);
    public Map<String, Object> prescriptionInsertion(Map<String,Object> prescriptionData);
    public Map<String, Object> medicineSuggestion(String medicine);
    public Map<String,Object> patientPrescriptionId(Integer prescriptionId);
    public Map<String,Object> getUserById(Long id);
}
