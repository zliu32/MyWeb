package com.example.demo.service;

import com.example.demo.bean.Rule;
import com.example.demo.dao.RuleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class RuleService {

    @Autowired
    private RuleDao ruleDao;

    @Transactional
    public Rule getRule(int id){
        Rule rule = ruleDao.findById(id).get();
        return rule;
    }

    @Transactional
    public Rule saveRule(Rule rule){
        Rule result = ruleDao.save(rule);
        return result;
    }

    @Transactional
    public List<Rule> getAllRule(){
        List<Rule> rules = ruleDao.findAll();
        return rules;
    }
}
