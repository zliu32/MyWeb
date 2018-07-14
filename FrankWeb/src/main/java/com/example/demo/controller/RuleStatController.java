package com.example.demo.controller;

import com.example.demo.Entity.RequestInfo;
import com.example.demo.Entity.ResponseInfo;
import com.example.demo.Entity.RuleStatResponse;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/rulestat")
@CrossOrigin
public class RuleStatController {

    @Autowired
    private RuleStatService ruleStatService;

    @Autowired
    private RuleService ruleService;

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

    @ApiOperation(value = "获取统计", notes = "获取统计", httpMethod = "POST")
    @RequestMapping(value = "/fetchSummary", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<RuleStatResponse> getRuleSummary(@RequestBody String username){
        List<RuleStat> ruleStats = this.ruleStatService.findAll();
        Map<String, Integer> summary = new HashMap<>();
        for (RuleStat ruleStat: ruleStats){
            if (username.equals(ruleStat.getUsername())) {
                int ruleId = ruleStat.getRuleId();
                int score = ruleStat.getScore();
                String name;
                try {
                    name = this.ruleService.getRule(ruleId).getCategory();
                } catch (Exception e){
                    name = "Not Exist";
                }
                if (summary.containsKey(name)) {
                    int temp = summary.get(name) + score;
                    summary.put(name, temp);
                } else {
                    summary.put(name, score);
                }
            }
        }
        List<RuleStatResponse> result = new ArrayList<>();
        for (String name : summary.keySet()){
            result.add(new RuleStatResponse(name, summary.get(name)));
        }
        return result;
    }

    @ApiOperation(value = "获取统计1", notes = "获取统计1", httpMethod = "POST1")
    @RequestMapping(value = "/fetchMonthly", method = RequestMethod.POST)
    @ResponseBody
    @CrossOrigin
    public List<RuleStatResponse> stat(@RequestBody String username){
        List<RuleStat> ruleStats = this.ruleStatService.findAll();
        Map<String, Integer> summary = new HashMap<>();
        for (RuleStat ruleStat: ruleStats){
            if (username.equals(ruleStat.getUsername())) {
                String[] pieces = ruleStat.getDate().split("-");
                String date = pieces[0] + "-" + pieces[1] + "-" + pieces[2];
                int score = ruleStat.getScore();
                if (summary.containsKey(date)) {
                    int temp = summary.get(date) + score;
                    summary.put(date, temp);
                } else {
                    summary.put(date, score);
                }
            }
        }
        List<RuleStatResponse> result = new ArrayList<>();
        result.add(new RuleStatResponse("start", 0));
        for (String date: summary.keySet()){
            result.add(new RuleStatResponse(date, summary.get(date)));
        }
        return result;
    }
}
