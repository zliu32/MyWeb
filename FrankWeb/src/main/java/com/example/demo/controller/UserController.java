package com.example.demo.controller;

import com.example.demo.bean.User;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    private ObjectMapper mapper = new ObjectMapper();

    @ApiOperation(value = "插入用户", notes = "用户插入测试", httpMethod = "POST")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "user", value = "输入数据", dataType = "User", required = true)
    })
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public User insertUser(@RequestBody User user){
        try{
            return userService.saveUser(user);
        } catch (Exception e){
            System.out.println(e);
            return null;
        }
    }

    @ApiOperation(value = "查找用户", notes = "查找测试", httpMethod = "POST")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "id", value = "输入数据", dataType = "String", required = true)
    })
    @RequestMapping(value = "/findById", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public User getUserById(@RequestBody int id){
        try {
            User user = userService.findUserById(id);
            return user;
        } catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @ApiOperation(value = "查找密码", notes = "密码查找测试", httpMethod = "POST")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "userName", value = "输入数据", dataType = "String", required = true)
    })
    @RequestMapping(value = "/findByName", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public User getUserByName(@RequestBody String userName) throws Exception {
        try {
            User user = userService.findUserByName(userName);
            return user;
        } catch (Exception e){
            System.out.println(e.toString());
            return null;
        }
    }

    @ApiOperation(value = "登录验证", notes = "登录验证测试", httpMethod = "POST")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "request", value = "输入数据", dataType =  "String", required = true)
    })
    @RequestMapping(value = "/authentication", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public boolean authenLogin(@RequestBody String request){
        try{
            JsonNode userInfo = mapper.readTree(request);
            String userName = userInfo.get("username").textValue();
            String passWord = userInfo.get("password").textValue();
            return userService.authentication(userName, passWord);
        } catch (Exception e){
            return false;
        }
    }
}
