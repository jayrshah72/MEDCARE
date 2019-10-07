package com.medcare.dao;

import com.medcare.model.Medicine;
import com.medcare.model.UserLoginModel;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AdminDaoImpl implements AdminDaoI {
    @Autowired
    SessionFactory sessionFactory;

    Transaction tx = null;
    Session session = null;
    SQLQuery query = null;

    Boolean status;

    List<Medicine> medicines = null;
    List<UserLoginModel> staff = null;
    List<UserLoginModel> patients = null;

    @Override
    public List<Medicine> medicines() {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM medicine");
        query.addEntity(Medicine.class);
        medicines = query.list();
        return medicines;
    }

    @Override
    public List<UserLoginModel> staffMembers() {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM user WHERE type = 'doctor' OR type = 'admin' OR type = 'receptionist'");
        query.addEntity(UserLoginModel.class);
        staff = query.list();
        return staff;
    }

    @Override
    public List<UserLoginModel> patients() {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("SELECT * FROM user WHERE type = 'patient'");
        query.addEntity(UserLoginModel.class);
        patients = query.list();
        return patients;
    }

    @Override
    public void removePatient(Long id) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("DELETE U,P FROM user as U JOIN patient_details as P ON U.id = P.id WHERE id = " + id);
        query.executeUpdate();
    }

    @Override
    public void removeMedicine(Long id) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("DELETE FROM medicine WHERE id = " + id);
        query.executeUpdate();
    }

    @Override
    public Boolean addNewMedicine(Medicine medicine) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        session.save(medicine);
        try{
            tx.commit();
            session.close();
            status = true;
        }catch (Exception e){
            tx.rollback();
            status = false;
            e.printStackTrace();
        }
        return status;
    }
}
