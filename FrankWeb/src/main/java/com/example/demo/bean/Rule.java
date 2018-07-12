package com.example.demo.bean;


import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Rule")
public class Rule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;

    @Column(name = "date", nullable = false)
    public String date;

    @Column(name = "description", nullable = false, length = 255)
    public String description;

    @Column(name = "category", nullable = false, length = 255)
    public String category;

    @Column(name = "score")
    public int score;

    @Column(name = "creater")
    public String creater;

    @Column(name = "status")
    public boolean status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getCreater() {
        return creater;
    }

    public void setCreater(String creater) {
        this.creater = creater;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Rule{" +
                "id=" + id +
                ", date='" + date + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", score=" + score +
                ", creater='" + creater + '\'' +
                ", status=" + status +
                '}';
    }
}
