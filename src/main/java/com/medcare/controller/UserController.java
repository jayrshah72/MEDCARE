package com.medcare.controller;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.medcare.model.UserLoginModel;
import com.medcare.service.UserLoginServiceI;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


@Controller
@RequestMapping(value="/user")
public class UserController {
    @Autowired
    UserLoginServiceI userLoginService;

    @RequestMapping(value="/login",method=RequestMethod.POST, produces = "application/json")
    @ResponseBody
    public Map<String,Object> forForm(@RequestBody Map<String,Object> req,HttpServletRequest request)
    {
        HttpSession currentSession;
        String phno=(String)req.get("phno");
        String password=(String)req.get("password");
        UserLoginModel user=new UserLoginModel();
        user.setPhno(new BigInteger(phno));
        user.setPassword(password);
        UserLoginModel userLogin = userLoginService.login(user);

        Map<String,Object> res=new HashMap<>();
        if(userLogin != null) {
            currentSession = request.getSession();
            currentSession.setAttribute("user",userLogin.getId());
            res.put("status","true");
            res.put("user",userLogin);
        }
        else{
            res.put("status","false");
        }
        return res;
    }
}