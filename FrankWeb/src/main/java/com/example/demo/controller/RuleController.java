package com.example.demo.controller;

import com.example.demo.bean.Rule;
import com.example.demo.dao.RuleDao;
import com.example.demo.service.RuleService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@Controller
@RequestMapping("/rule")
@CrossOrigin
public class RuleController {

    @Autowired
    private RuleService ruleService;

    @ApiOperation(value = "插入规则", notes = "插入规则", httpMethod = "POST")
    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public Rule saveRule(@RequestBody Rule rule){
        long millis = System.currentTimeMillis();
        Date date = new Date(millis);
        rule.setDate(date.toString());
        return ruleService.saveRule(rule);
    }

    @ApiOperation(value = "查找规则", notes = "插入规则", httpMethod = "POST")
    @RequestMapping(value = "/find", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public Rule findRule(@RequestBody int id){
        Rule rule = ruleService.getRule(id);
        return rule;
    }

    @ApiOperation(value = "查找所有规则", notes = "查找所有规则", httpMethod = "POST")
    @RequestMapping(value = "/findAll", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<Rule> finddAllRule(){
        List<Rule> rules = ruleService.getAllRule();
        return rules;
    }
}
