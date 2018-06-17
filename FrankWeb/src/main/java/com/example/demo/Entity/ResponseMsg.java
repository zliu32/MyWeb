package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResponseMsg {

    @JsonProperty
    private String message;

    @Override
    public String toString() {
        return "ResponseMsg{" +
                "message='" + message + '\'' +
                '}';
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
