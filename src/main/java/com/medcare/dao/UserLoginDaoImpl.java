package com.medcare.dao;

import java.util.List;

import com.medcare.model.UserLoginModel;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserLoginDaoImpl implements UserLoginDaoI{

    @Autowired
    SessionFactory sessionFactory;
    Transaction tx = null;
    Session session = null;

    @SuppressWarnings("unchecked")
    @Override
    public UserLoginModel login(UserLoginModel user) {
        List<UserLoginModel> list;
        session = sessionFactory.openSession();
        tx = session.beginTransaction();

        SQLQuery query = session.createSQLQuery("select * from user where phno = '"+user.getPhno()+"' and password = '"+user.getPassword()+"'");
        query.addEntity(UserLoginModel.class);
        list = query.list();
        tx.commit();
        session.close();
        if(!list.isEmpty()){
            return list.get(0);
        }
        else {
            System.out.println("error");
            return null;
        }
    }

    @Override
    public UserLoginModel saveUser(UserLoginModel user) {
        session = sessionFactory.openSession();
        int pin = (int) (Math.random() * 9000) + 1000;
        user.setPassword(""+pin);
        session.save(user);
        return user;
    }

    @Override
    public Boolean checkUser(UserLoginModel user) {
        session = sessionFactory.openSession();
        tx = session.beginTransaction();

        SQLQuery checking = session.createSQLQuery("select * from user where phno = " + user.getPhno());;
        List tmp = checking.list();

        return (tmp.isEmpty());
    }
}