package com.medcare.service;

import java.util.HashMap;
import java.util.Map;

public interface PatientCountServiceI {
    public HashMap totalCount();
    public Map<String, Object> opdPatients(Integer id);
    public Map<String, Object> admitPatients(Integer id);
}
