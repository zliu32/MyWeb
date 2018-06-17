package com.example.demo.controller;

import com.example.demo.Entity.ResponseMsg;
import com.example.demo.bean.Rule;
import io.swagger.annotations.ApiOperation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@Controller
@RequestMapping("/common")
@CrossOrigin
public class CommonController {

    @ApiOperation(value = "获得日期", notes = "获得日期", httpMethod = "POST")
    @RequestMapping(value = "/getDate", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public ResponseMsg getDate(@RequestBody int offset){
        long millis = System.currentTimeMillis();
        Date date = new Date(millis + offset * 86400000);
        ResponseMsg result = new ResponseMsg();
        result.setMessage(date.toString());
        return result;
    }
}
