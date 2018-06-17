package com.example.demo.bean;

import org.springframework.stereotype.Controller;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name = "rulestat")
public class RuleStat implements Serializable {

    @Id
    @Column(name = "id", nullable = false, unique = true)
    public String id;

    @Column(name = "date", nullable = false)
    public String date;

    @Column(name = "ruleid")
    private int ruleId;

    @Column(name = "username")
    private String username;

    @Column(name = "score")
    private int score;

    @Override
    public String toString() {
        return "RuleStat{" +
                "id=" + id +
                ", date=" + date +
                ", ruleId=" + ruleId +
                ", username=" + username +
                ", score=" + score +
                '}';
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getRuleId() {
        return ruleId;
    }

    public void setRuleId(int ruleId) {
        this.ruleId = ruleId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
}
