package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RequestInfo {

    @JsonProperty
    private int index;

    @JsonProperty
    private int ruleId;

    @JsonProperty
    private String username;

    @JsonProperty
    private int dateOffset;

    @Override
    public String toString() {
        return "RequestInfo{" +
                "index=" + index +
                ", ruleId=" + ruleId +
                ", username='" + username + '\'' +
                ", dateOffset=" + dateOffset +
                '}';
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
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

    public int getDateOffset() {
        return dateOffset;
    }

    public void setDateOffset(int dateOffset) {
        this.dateOffset = dateOffset;
    }
}
