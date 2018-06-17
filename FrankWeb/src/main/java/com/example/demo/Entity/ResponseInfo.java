package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseInfo {

    @JsonProperty
    private int index;

    @JsonProperty
    private int choice;

    @Override
    public String toString() {
        return "ResponseInfo{" +
                "index=" + index +
                ", choice=" + choice +
                '}';
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public int getChoice() {
        return choice;
    }

    public void setChoice(int choice) {
        this.choice = choice;
    }
}
