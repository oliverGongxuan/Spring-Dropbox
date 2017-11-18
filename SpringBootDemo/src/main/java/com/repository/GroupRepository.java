package com.repository;


import com.entity.SpringGroup;

import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface GroupRepository extends CrudRepository<SpringGroup, Long> {
    void deleteByMember(String groupid, String member);
    void deleteByGroupid(String groupid);
//    Iterable<SpringGroup> findAll(String groupid);
}
