package com.example.demo.controller;

import com.example.demo.Entity.RequestInfo;
import com.example.demo.Entity.ResponseInfo;
import com.example.demo.bean.RuleStat;
import com.example.demo.service.RuleService;
import com.example.demo.service.RuleStatService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

@Controller
@RequestMapping("/rulestat")
@CrossOrigin
public class RuleStatController {

    @Autowired
    private RuleStatService ruleStatService;

    final private long DAYINMILLIS = 86400000;


    @ApiOperation(value = "存储规则信息", notes = "存储规则信息测试", httpMethod = "POST")
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public boolean saveRuleStat(@RequestBody RuleStat ruleStat){
        long millis = System.currentTimeMillis();
        Date date = new Date(millis);
        ruleStat.setDate(date.toString());
        String id = ruleStat.getUsername() + "-" + date.toString() + "-" + ruleStat.getRuleId();
        ruleStat.setId(id);
        System.out.println(ruleStat.toString());
        return ruleStatService.saveRuleStat(ruleStat);
    }

    @ApiOperation(value = "计算分数", notes = "计算分数测试", httpMethod = "POST")
    @RequestMapping(value = "/countScore", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public int countScore(@RequestBody String username){
        int score = ruleStatService.countScore(username);
        return score;
    }

    @ApiOperation(value = "获取统计", notes = "获取统计", httpMethod = "POST")
    @RequestMapping(value = "/fetchStat", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public ResponseInfo getRuleState(@RequestBody RequestInfo info){
        long millis = System.currentTimeMillis();
        Date date = new Date(millis + DAYINMILLIS * info.getDateOffset());
        String id = info.getUsername() + "-" + date.toString() + "-" + info.getRuleId();
        ResponseInfo result = ruleStatService.findRuleStat(id, info.getIndex());
        return result;
    }
}
