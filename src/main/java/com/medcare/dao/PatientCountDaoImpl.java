package com.medcare.dao;


import com.medcare.model.PatientDetailsModel;
import com.medcare.model.UserDataModel;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.type.LongType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.ListIterator;

@Repository
public class PatientCountDaoImpl implements PatientCountDaoI{

    @Autowired
    SessionFactory sessionFactory;

    Transaction tx = null;
    Session session = null;
    SQLQuery query = null;
    List<PatientDetailsModel> patientDetailsModels = null;

    @Override
    public Long opdCount() {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();

        Long opdcount = (Long) session.createSQLQuery("select count(*) as c from patient_details where status = 0").addScalar("c", new LongType()).uniqueResult();
        tx.commit();
        session.close();
        return opdcount;
    }

    @Override
    public Long admitCount() {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        Long admitcount = (Long) session.createSQLQuery("select count(*) as c from patient_details where status = 1").addScalar("c", new LongType()).uniqueResult();
        tx.commit();
        session.close();
        return admitcount;
    }

    @Override
    public List<PatientDetailsModel> getOpdList(Integer id) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("select * from patient_details join user ON patient_details.id = user.id where status = 0 and doctor_id="+id);
        query.addEntity(UserDataModel.class);
        patientDetailsModels = query.list();
        return patientDetailsModels;
    }

    @Override
    public List<PatientDetailsModel> getAdmittedList(Integer id) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        query = session.createSQLQuery("select * from patient_details join user ON patient_details.id = user.id where status = 1 and doctor_id="+id);
        query.addEntity(UserDataModel.class);
        patientDetailsModels = query.list();
        return patientDetailsModels;
    }
}