package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RuleStatResponse {

    @JsonProperty
    public String name;

    @JsonProperty
    public int value;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "RuleStatResponse{" +
                "name='" + name + '\'' +
                ", value=" + value +
                '}';
    }

    public RuleStatResponse(String name, int value) {
        this.name = name;
        this.value = value;
    }

    public RuleStatResponse() {
    }
}
