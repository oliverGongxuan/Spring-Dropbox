package com.service;

import com.entity.SpringGroup;
import com.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupService {
    @Autowired
    private GroupRepository groupRepository;

    public Iterable<SpringGroup> showMember(){
        return groupRepository.findAll();
    }
    public void addMember(SpringGroup springGroup){
        groupRepository.save(springGroup);
    }
    public void deleteMember(SpringGroup springGroup){
        groupRepository.delete(springGroup);
    }
    public void deleteGroup(SpringGroup springGroup){
        groupRepository.delete(springGroup);
    }
    public void createGroup(SpringGroup springGroup){
        groupRepository.save(springGroup);
    }
}
