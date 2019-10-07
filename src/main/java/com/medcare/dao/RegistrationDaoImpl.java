package com.medcare.dao;

import com.medcare.model.DoctorDetailsModel;
import com.medcare.model.NurseDetailsModel;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RegistrationDaoImpl implements RegistrationDaoI {

    @Autowired
    SessionFactory sessionFactory;

    private Transaction tx = null;
    private Session session = null;
    private SQLQuery inserting = null;

    private Boolean status;

    @Override
    public Boolean register(Object type) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();
        if(type instanceof DoctorDetailsModel){
            inserting = session.createSQLQuery("INSERT INTO doctor_details(id,is_available) VALUES ('"+((DoctorDetailsModel) type).getId()+"','"+((DoctorDetailsModel) type).isAvailable()+"')");
            inserting.addEntity(DoctorDetailsModel.class);
        }
        else if(type instanceof NurseDetailsModel){
            inserting = session.createSQLQuery("INSERT INTO nurse_details(id,is_available) VALUES ('"+((NurseDetailsModel) type).getId()+"','"+((NurseDetailsModel) type).getAvailable()+"')");
            inserting.addEntity(NurseDetailsModel.class);
        }

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
