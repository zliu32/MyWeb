package com.example.demo.bean;

import javax.persistence.*;

@Entity
@Table(name = "Journal")
public class Journal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "date", nullable = false)
    private String date;

    @Column(name = "context")
    private String context;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    @Override
    public String toString() {
        return "Journal{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", date='" + date + '\'' +
                ", conext='" + context + '\'' +
                '}';
    }
}
