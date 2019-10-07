package com.medcare.controller;

import com.medcare.model.Medicine;
import com.medcare.model.UserLoginModel;
import com.medcare.service.AdminServicesI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/admin")
public class AdminController {

    @Autowired
    AdminServicesI adminServicesI;

    HttpSession currentSession;

    @RequestMapping(value="/medicineList",method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<Medicine> medicineist() {
        return adminServicesI.getMedicineList();
    }

    @RequestMapping(value="/staffList",method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<UserLoginModel> staffList() {
        return adminServicesI.getStaffList();
    }

    @RequestMapping(value="/patientsList",method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<UserLoginModel> patientsList() {
        return adminServicesI.getPatientsList();
    }

    @RequestMapping(value="/removePatient/{id}",method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public void removePatient(@PathVariable("id") Long id) {
        adminServicesI.removePatient(id);
    }

    @RequestMapping(value="/removeMedicine/{id}",method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public void removeMedcine(@PathVariable("id") Long id) {
        adminServicesI.removeMedicine(id);
    }

    @RequestMapping(value="/addNewMedicine/",method = RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> addNewMedicine(@RequestBody Map<String,Object> req) {
        Map<String,Object> response = null;

        String medcineName = (String) req.get("medicinename");
        String medcineContent = (String) req.get("medicinecontent");
        String medcineUse = (String) req.get("medicineuse");
        String medcinePrice = (String) req.get("medicineprice");
        String tablets = (String) req.get("tablet");

        Medicine medicine = new Medicine();
        medicine.setName(medcineName);
        medicine.setContents(medcineContent);
        medicine.setUsedfor(medcineUse);
        medicine.setPrice(medcinePrice);
        medicine.setTablets(tablets);
        response = adminServicesI.addNewMedicine(medicine);
        return response;
    }
}
