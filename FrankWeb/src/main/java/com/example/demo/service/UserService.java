package com.example.demo.service;

import com.example.demo.bean.User;
import com.example.demo.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserDao dao;

    @Transactional
    public User findUserById(int id){
       return dao.findById(id).get();
    }

    @Transactional
    public User saveUser(User user){
        return dao.save(user);
    }

    @Transactional
    public User findUserByName(String username){
        return dao.findByName(username);
    }

    @Transactional
    public boolean authentication(String username, String password){
        try{
            User user = findUserByName(username);
            return user.getPassword().equals(password);
        } catch (Exception e){
            return false;
        }
    }
}
