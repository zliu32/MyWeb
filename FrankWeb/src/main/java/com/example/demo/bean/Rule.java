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
    public Date date;

    @Column(name = "description", nullable = false, length = 255)
    public String description;

    @Column(name = "name", nullable = false, length = 255)
    public String name;

    @Column(name = "score")
    public int score;

    @Column(name = "createrId")
    public int createId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getCreateId() {
        return createId;
    }

    public void setCreateId(int createId) {
        this.createId = createId;
    }

    @Override
    public String toString() {
        return "Rule{" +
                "id=" + id +
                ", date=" + date +
                ", description='" + description + '\'' +
                ", name='" + name + '\'' +
                ", score=" + score +
                ", createId=" + createId +
                '}';
    }
}
