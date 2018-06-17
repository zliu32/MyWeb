package com.example.demo.service;

import com.example.demo.Entity.ResponseInfo;
import com.example.demo.bean.RuleStat;
import com.example.demo.dao.RuleStatDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class RuleStatService {

    @Autowired
    private RuleStatDao ruleStatDao;

    @Transactional
    public boolean saveRuleStat(RuleStat ruleStat){
        try {
            ruleStatDao.save(ruleStat);
            return true;
        } catch (Exception e){
            System.out.println(e.toString());
            return false;
        }
    }

    @Transactional
    public int countScore(String username){
        try{
            int totalScore = ruleStatDao.scoreByUsername(username);
            return totalScore;
        } catch (Exception e){
            System.out.println(e.toString());
            return -1;
        }
    }

    @Transactional
    public ResponseInfo findRuleStat(String id, int index){
        try {
            RuleStat result = ruleStatDao.findById(id).get();
            ResponseInfo ret = new ResponseInfo();
            ret.setIndex(index);
            ret.setChoice(result.getScore());
            return ret;
        } catch (Exception e){
            System.out.println(e.toString());
            ResponseInfo ret = new ResponseInfo();
            ret.setIndex(-1);
            return ret;
        }
    }
}
