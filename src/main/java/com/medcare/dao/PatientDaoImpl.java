package com.medcare.dao;

import com.medcare.model.*;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sound.midi.SysexMessage;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class PatientDaoImpl implements PatientDaoI {

    @Autowired
    SessionFactory sessionFactory;

    Transaction tx = null;
    Session session = null;
    SQLQuery query = null;

    List<PrescriptionModel> prescriptionModels = null;
    List<PrescriptionMedicineModel> prescriptionMedicineModels = null;
    List<PaymentModel> billModels = null;
    List<Medicine> medicines = null;
    Map<Integer,Medicine> alternates = null;
    List<UserLoginModel> users = null;

    @Override
    public List<PrescriptionModel> getPatientsPrescription(int patientId) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM prescription WHERE patient_id = " + patientId);
        query.addEntity(PrescriptionModel.class);
        prescriptionModels = query.list();
        return prescriptionModels;
    }

    @Override
    public List<PaymentModel> getBillInfo(Long patientId) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM patient_payment JOIN patient_details ON patient_payment.patient_id = patient_details.id JOIN payment_type ON patient_payment.payment_type_id = payment_type.id WHERE patient_id =" + patientId);
        query.addEntity(PaymentModel.class);
        billModels = query.list();
        return billModels;
    }

    @Override
    public Boolean paymentInserting(PatientPaymentModel paymentData) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        try{
            session.save(paymentData);
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
        session.close();
        tx.commit();
        return true;
    }

    @Override
    public Boolean prescriptionInserting(Map<String,Object> prescriptionData) {
        System.out.println("IN Dao");
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        PrescriptionModel idData = new PrescriptionModel();
        PatientDetailsModel patient = new PatientDetailsModel();
        DoctorDetailsModel doctor = new DoctorDetailsModel();
        patient.setId((Integer) prescriptionData.get("pId"));
        doctor.setId((Integer) prescriptionData.get("dId"));
        idData.setPdmod(patient);
        idData.setDdmod(doctor);
        idData.setDate(new Date());
        idData.setNote((String) prescriptionData.get("note"));

        try{
            session.save(idData);


            List<PrescriptionMedicineModel> prescriptions = (List<PrescriptionMedicineModel>) prescriptionData.get("medicines");
            for(PrescriptionMedicineModel prescription : prescriptions) {
                prescription.setPmObj(idData);
                session.save(prescription);
                System.out.println("DONE");
            }
            tx.commit();
            return true;
        }catch (Exception ex){
            System.out.println("Error");
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public List<Medicine> medicineSuggesting(String medicine) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        try {
            medicine = medicine+"%";
            query = session.createSQLQuery("SELECT * FROM medicine where name LIKE '"+medicine+"'");
            query.addEntity(Medicine.class);
            medicines = query.list();
            return medicines;
        }catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    @Override
    public Object patientPrescriptionId(Integer prescriptionId) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        List<TemporaryBufferModel> temporaryBufferModels = null;
        /*query = session.createSQLQuery("SELECT * FROM prescription WHERE id = " + prescriptionId);
        query.addEntity(PrescriptionModel.class);
        prescriptionModels = query.list();
        PrescriptionModel prescriptionModel = prescriptionModels.get(0);*/
        Medicine m = null;
        query = session.createSQLQuery("SELECT p.id id,p.medicine_id medicineId,p.description,m.name,m.contents,m.usedfor,m.price,m.tablets FROM prescription_medicine p INNER JOIN medicine m ON p.medicine_id=m.id WHERE p.prescription_id = "+prescriptionId);
        query.addEntity(TemporaryBufferModel.class);
        temporaryBufferModels = query.list();

        alternates = new HashMap<>();
        for(TemporaryBufferModel temp : temporaryBufferModels)
        {
            /*session = sessionFactory.openSession();
            tx = session.beginTransaction();
            query = session.createSQLQuery("SELECT * FROM medicine WHERE contents ='"+temp.getContents()+"'");
            query.addEntity(Medicine.class);
            medicines = query.list();
            Medicine LowCost = medicines.get(0);
            float unitPrice = Float.parseFloat(medicines.get(0).getPrice());
            unitPrice /= Float.parseFloat(medicines.get(0).getTablets());
            for(Medicine m : medicines)
            {
                float cunitPrice = Float.parseFloat(m.getPrice());
                cunitPrice /= Float.parseFloat(m.getTablets());
                if(unitPrice > cunitPrice)
                {
                    LowCost = m;
                    unitPrice = cunitPrice;
                }
            }*/
            m = getGenericMedicine(temp.getContents());
            alternates.put(temp.getMedicineId(),m);
        }
        return alternates;
    }

    @Override
    public Object getUserById(Long id) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM user WHERE id = " + id);
        query.addEntity(UserLoginModel.class);
        users = query.list();
        return users.get(0);
    }

    private Medicine getGenericMedicine(String contents) {

        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM medicine WHERE contents ='"+contents+"'");
        query.addEntity(Medicine.class);
        medicines = query.list();
        Medicine LowCost=medicines.get(0);
        float unitPrice = Float.parseFloat(medicines.get(0).getPrice());
        unitPrice /= Float.parseFloat(medicines.get(0).getTablets());
        for(Medicine m : medicines)
        {
            float cunitPrice = Float.parseFloat(m.getPrice());
            cunitPrice /= Float.parseFloat(m.getTablets());
            if(unitPrice > cunitPrice)
            {
                LowCost=m;
                unitPrice=cunitPrice;
            }
        }
        try {
            Thread.sleep(5000);
        }
        catch (java.lang.InterruptedException e){
            e.printStackTrace();
        }
        return LowCost;
    }
}