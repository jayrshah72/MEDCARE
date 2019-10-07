package com.medcare.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.naming.InsufficientResourcesException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.medcare.model.Medicine;
import com.medcare.model.NewPrescriptionDTO;
import com.medcare.model.PrescriptionMedicineModel;
import com.medcare.service.PatientCountServiceI;
import com.medcare.service.PatientService;
import javafx.beans.property.IntegerPropertyBase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value="/doctor")
public class DoctorController {

    @Autowired
    PatientCountServiceI patientCountService;

    HttpSession currentSession;

    @Autowired
    PatientService patientService;

    @RequestMapping(value="/count",method=RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<String,Object> forForm(HttpServletRequest request)
    {
        return patientCountService.totalCount();

    }

    @RequestMapping(value="/opdList",method=RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<String, Object> opdList(HttpServletRequest request) {
        Map<String,Object> map;
        if(request!=null)
        {
            currentSession=request.getSession();
            Integer id= (Integer) currentSession.getAttribute("user");
            map = patientCountService.opdPatients(id);
            return map;
        }
        else {
            return null;
        }
    }

    @RequestMapping(value="/admitList",method=RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<String, Object> admitList(HttpServletRequest request) {
        Map<String,Object> map;
        if(request!=null) {
            currentSession=request.getSession();
            Integer id= (Integer) currentSession.getAttribute("user");
            map =  patientCountService.admitPatients(id);
            return map;
        }
        else {
            return null;
        }
    }

    @RequestMapping(value="/prescriptionList",method=RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> prescriptionList(@RequestBody Map<String,Object> req){
        return patientService.prescriptionList(Integer.parseInt(req.get("patientId").toString()));
    }

    @RequestMapping(value="/prescriptionInsertion",method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> prescriptionDoctor(@RequestBody Map<String, Object> req, HttpServletRequest hReq){
        List<Map<String, Object>> IdDescription = (List<Map<String, Object>>) req.get("IdDescriptionList");
        currentSession = hReq.getSession();
        int patientId = Integer.parseInt(req.get("patientId").toString());
        int doctorId = Integer.parseInt(currentSession.getAttribute("user").toString());
        String note = (String) req.get("note");
        Map<String, Object> prescriptionData = new HashMap<>();
        prescriptionData.put("pId",patientId);
        prescriptionData.put("dId",doctorId);
        prescriptionData.put("note",note);
        List<PrescriptionMedicineModel> prescription = new ArrayList<>();
        for(int i = 0; i < IdDescription.size(); i++) {
            prescription.add(new PrescriptionMedicineModel(Integer.parseInt(IdDescription.get(i).get("medicineId").toString()),
                            IdDescription.get(i).get("description").toString()));
        }
        prescriptionData.put("medicines",prescription);
        System.out.println(prescriptionData.toString());
        return patientService.prescriptionInsertion(prescriptionData);
    }

    @RequestMapping(value="/medicineSuggestion/{medicine}",method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<String, Object> medicineSuggestion(@PathVariable("medicine") String medicine){
        return patientService.medicineSuggestion(medicine);
    }

    @RequestMapping(value="/getUserById/{id}",method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public Map<String, Object> getUserById(@PathVariable("id") Long id) {
        Map<String, Object> map;
        map = patientService.getUserById(id);
        return map;
    }
}