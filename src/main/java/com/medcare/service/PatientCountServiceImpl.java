package com.medcare.service;

import com.medcare.dao.PatientCountDaoI;
import com.medcare.model.PatientDetailsModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PatientCountServiceImpl implements PatientCountServiceI {

    @Autowired
    PatientCountDaoI patientCountDao;

    @Override
    public HashMap totalCount() {

        HashMap<String, Object> theCount  = new HashMap<>();
        try{
            theCount.put("opdCount", patientCountDao.opdCount());
            theCount.put("admitCount", patientCountDao.admitCount());
            theCount.put("status",true);
        }catch (Exception e){
            theCount.put("status",false);
        }
        return theCount;
    }

    @Override
    public Map<String, Object> opdPatients(Integer id) {
        List<PatientDetailsModel> opdList =  patientCountDao.getOpdList(id);
        Map<String,Object> map = new HashMap<>();
        if(!opdList.isEmpty()){
            map.put("status", true);
            map.put("patientOpdList", opdList);
            map.put("listname","OPD Patients");
        }
        else{
            map.put("status", false);
        }
        return map;
    }

    @Override
    public Map<String, Object> admitPatients(Integer id) {
        List<PatientDetailsModel> admitList =  patientCountDao.getAdmittedList(id);
        Map<String,Object> map = new HashMap<>();
        if(!admitList.isEmpty()){
            map.put("status", true);
            map.put("patientAdmittedList", admitList);
            map.put("listname","Admitted Patients");
        }
        else{
            map.put("status", false);
        }
        return map;
    }
}