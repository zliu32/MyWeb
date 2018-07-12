package com.example.demo.controller;

import com.example.demo.bean.Rule;
import com.example.demo.dao.RuleDao;
import com.example.demo.service.RuleService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.ArrayList;
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

    @ApiOperation(value = "根据状态查找规则", notes = "插入规则", httpMethod = "POST")
    @RequestMapping(value = "/findStatusByCreater", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<Rule> findRuleByStatus(@RequestBody String input){
        List<Rule> rules = new ArrayList<>();
        try {
            ObjectMapper om = new ObjectMapper();
            JsonNode object = om.readTree(input);
            boolean status = object.get("status").asBoolean();
            String creater = object.get("username").textValue();
            rules = ruleService.getPendingRuleByCreater(status, creater);
        } catch (Exception e){
            System.out.println(e.toString());
        }
        return rules;
    }

    @ApiOperation(value = "查找所有规则", notes = "查找所有规则", httpMethod = "POST")
    @RequestMapping(value = "/findAll", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<Rule> finddAllRule(){
        List<Rule> rules = ruleService.getAllRule();
        return rules;
    }

    @ApiOperation(value = "查找所有pending规则", notes = "查找所有规则", httpMethod = "POST")
    @RequestMapping(value = "/findAllPending", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<Rule> finddAllPendingRule(){
        List<Rule> rules = ruleService.getRuleWithStatus(false);
        return rules;
    }

    @ApiOperation(value = "查找所有approv规则", notes = "查找所有规则", httpMethod = "POST")
    @RequestMapping(value = "/findAllApproved", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<Rule> finddAllApprovedRule(){
        List<Rule> rules = ruleService.getRuleWithStatus(true);
        return rules;
    }

    @ApiOperation(value = "删除规则", notes = "删除规则", httpMethod = "POST")
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public boolean deletRule(@RequestBody Rule rule){
        try{
            ruleService.deleteRule(rule);
        } catch (Exception e){
            return false;
        }
        return true;
    }
}
