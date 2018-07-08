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

    @Lob
    @Column(name = "comment", length = 50000)
    public String comment;

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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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
                ", comment='" + comment + '\'' +
                '}';
    }
}
