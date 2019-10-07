package com.medcare.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.medcare.service.UserLoginServiceI;
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
public class HomeController
{
    @Autowired
    UserLoginServiceI userLoginService;

    @RequestMapping(value="/")
    public String forIndex()
    {
        return "index";
    }
	/*@RequestMapping(value="/form",method=RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Map<String,Object> forForm(@RequestBody Map<String,Object> req,HttpServletRequest request)
	{
		String password = req.get("password").toString();
		String email = req.get("email").toString();
		Map<String,Object> res=new HashMap<String, Object>();

		UserLoginModel ulm = new UserLoginModel();
		ulm.setPassword(password);
		ulm.setEmail(email);
		ulm = userLoginService.login(ulm);
		if(ulm != null){
			System.out.println("Passed");
			res.put("user", ulm);
			res.put("status", true);
			res.put("message", "Successful");
		}
		else{
			System.out.println("Not Passed");
			res.put("status", false);
			res.put("message", "Unsuccessful");
		}
		return res;
	}*/
}