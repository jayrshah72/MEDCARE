package com.medcare.controller;

import com.medcare.model.DoctorDetailsModel;
import com.medcare.model.NurseDetailsModel;
import com.medcare.model.PatientDetailsModel;
import com.medcare.model.UserLoginModel;
import com.medcare.service.RegistrationServiceI;
import com.medcare.service.UserLoginServiceI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.math.BigInteger;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class RegistrationController {

    @Autowired
    RegistrationServiceI registrationService;

    @Autowired
    UserLoginServiceI userLoginService;

    @RequestMapping(value="/register",method= RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String, Object> forform(@RequestBody Map<String,Object> req){

        Map<String,Object> response = null;
        DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

        String userType = (String) req.get("userType");
        String userPhno = (String) req.get("phno");
        String userName = (String) req.get("name");
        String userAddress = (String) req.get("address");
        String userEmail = (String) req.get("email");
        Boolean userSex = (Boolean) req.get("sex");
        Date userBday = null;
        try {
            userBday = formatter.parse((String)req.get("bday"));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        UserLoginModel userData = new UserLoginModel();
        userData.setAddress(userAddress);
        userData.setUsername(userName);
        userData.setBirthdate(userBday);
        userData.setPhno(new BigInteger(userPhno));
        userData.setSex(userSex ? "male" : "female");
        userData.setEmail(userEmail);
        userData.setType(userType);

        Boolean checkUser = userLoginService.checkUser(userData);
        if (checkUser) userLoginService.saveUser(userData);

        if(userType.equalsIgnoreCase("Doctor")){
            DoctorDetailsModel doctorDetails = new DoctorDetailsModel();
            doctorDetails.setId(userData.getId());
            doctorDetails.setAvailable(true);
            response = registrationService.doctorRegister(doctorDetails);
        }
        else if(userType.equalsIgnoreCase("Nurse")){
            NurseDetailsModel nurseDetails = new NurseDetailsModel();
            nurseDetails.setId(userData.getId());
            nurseDetails.setPost((String) req.get("job"));
            nurseDetails.setAvailable(true);
            response = registrationService.nurseRegister(nurseDetails);
        }
        /*else if(userType.equalsIgnoreCase("Receptionist")) {

        }*/

        return response;
    }
}