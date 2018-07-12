package com.example.demo.dao;

import com.example.demo.bean.Rule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RuleDao extends JpaRepository<Rule, Integer> {
    List<Rule> findRuleByStatusAndCreater(boolean status, String creater);

    List<Rule> findRuleByStatus(boolean status);
}
