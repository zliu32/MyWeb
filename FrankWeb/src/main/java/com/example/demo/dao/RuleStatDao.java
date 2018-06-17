package com.example.demo.dao;

import com.example.demo.bean.RuleStat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RuleStatDao extends JpaRepository<RuleStat, String> {

    @Query(value = "SELECT SUM(score) FROM rulestat WHERE username = ?1", nativeQuery = true)
    int scoreByUsername(String username);
}
