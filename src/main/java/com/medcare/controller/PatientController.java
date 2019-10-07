package com.medcare.controller;

import com.medcare.service.PatientCountServiceI;
import com.medcare.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping(value="/patient")
public class PatientController {

    @Autowired
    PatientCountServiceI patientCountService;

    @Autowired
    PatientService patientService;

    @RequestMapping(value = "/billGenerator/{patientId}", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<String, Object> bill(@PathVariable("patientId") Long patientId){
        return (patientId != null) ? patientService.billDetails(patientId) : null;
    }

    @RequestMapping(value = "/paymentInsertion", method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> paymentInsertion(@RequestBody Map<String, Object> req){
        return null;
    }

    @RequestMapping(value="/patientPrescriptionList",method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> patientPrescriptionList(@RequestBody Map<String, Object> req) {
        return patientService.prescriptionList(Integer.parseInt(req.get("patientId").toString()));
    }

    @RequestMapping(value="/prescriptionId",method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> patientPrescriptionId(@RequestBody Map<String, Object> req) {
        Integer prescriptionId = (Integer) req.get("prescriptionId");
        return patientService.patientPrescriptionId(prescriptionId);
    }
}
