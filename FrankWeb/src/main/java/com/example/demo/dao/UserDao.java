package com.example.demo.dao;

import com.example.demo.bean.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserDao extends CrudRepository<User, Integer> {

    @Query(value = "SELECT * from user WHERE username=:username", nativeQuery = true)
    User findByName(@Param("username") String username);

}
