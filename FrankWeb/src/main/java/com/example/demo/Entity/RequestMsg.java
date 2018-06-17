package com.example.demo.Entity;

public class RequestMsg {

    private int data;
    private String message;

    public void setData(int data){
        this.data = data;
    }

    public int getData(){
        return this.data;
    }

    public void setMessage(String message){
        this.message = message;
    }

    public String getMessage(){
        return this.message;
    }

}
