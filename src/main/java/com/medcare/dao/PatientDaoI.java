package com.medcare.dao;

import com.medcare.model.Medicine;
import com.medcare.model.PatientPaymentModel;
import com.medcare.model.PaymentModel;
import com.medcare.model.PrescriptionModel;

import java.util.List;
import java.util.Map;

public interface PatientDaoI {
    public List<PrescriptionModel> getPatientsPrescription(int patientId);
    public List<PaymentModel> getBillInfo(Long patientId);
    public Boolean paymentInserting(PatientPaymentModel paymentData);
    public Boolean prescriptionInserting(Map<String,Object> prescriptionData);
    public List<Medicine> medicineSuggesting(String medicine);
    public Object patientPrescriptionId(Integer prescriptionId);
    public Object getUserById(Long id);
}