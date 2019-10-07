package com.medcare.dao;

import com.medcare.model.PatientDetailsModel;

import java.util.List;

public interface PatientCountDaoI {
    public Long opdCount();
    public Long admitCount();
    List<PatientDetailsModel> getOpdList(Integer id);
    List<PatientDetailsModel> getAdmittedList(Integer id);
}