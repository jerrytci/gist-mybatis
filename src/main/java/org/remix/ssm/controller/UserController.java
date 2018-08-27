package org.remix.ssm.controller;

import com.google.gson.Gson;
import org.remix.ssm.domain.UserEntity;
import org.remix.ssm.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    UserMapper userMapper;

    @RequestMapping(value = "/index", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public ModelAndView i() {
        List<UserEntity> users = userMapper.getAllUser();
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        mav.addObject("users", users);
        return mav;
    }

    @GetMapping("/index2")
    public ResponseEntity i2(){
        List<UserEntity> users = userMapper.getAllUser();
        return ResponseEntity.ok(users);
    }

    @RequestMapping(value = "/index3", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public ResponseEntity i3() {
        List<UserEntity> users = userMapper.getAllUser();
        return ResponseEntity.ok(new Gson().toJson(users));
    }

    @RequestMapping(value = "/index4", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public String i4() {
        return "index2";
    }

    @RequestMapping(value = "/", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public ResponseEntity a2() {
        List<UserEntity> users = userMapper.getAllUser();
        return ResponseEntity.ok(new Gson().toJson(users));
    }

}