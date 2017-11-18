package com.repository;

import com.entity.SpringUser;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface UserRepository extends CrudRepository<SpringUser, Long> {
    List<SpringUser> findByEmailAndPassword(String email, String password);
}