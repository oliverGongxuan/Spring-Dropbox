package com.service;

import com.entity.SpringUser;
import com.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Iterable<SpringUser> getAllUsers(){
        return userRepository.findAll();
    }

    public void addUser(SpringUser springUser){
        userRepository.save(springUser);
    }

    public List<SpringUser> login(String email, String password){
        return userRepository.findByEmailAndPassword(email,password);
    }

}