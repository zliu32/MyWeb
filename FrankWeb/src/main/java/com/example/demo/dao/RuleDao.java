package com.example.demo.dao;

import com.example.demo.bean.Rule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RuleDao extends JpaRepository<Rule, Integer> {
}
