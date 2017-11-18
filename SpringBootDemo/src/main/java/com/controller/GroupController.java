package com.controller;

import com.entity.SpringGroup;
import com.service.GroupService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller    // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/group") // This means URL's start with /demo (after Application path)
public class GroupController {
    @Autowired
    private GroupService groupService;

    @PostMapping(path="/addMember",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> addNewMember (@RequestBody String group) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        SpringGroup springGroup = new SpringGroup();
        JSONObject jsonObject = new JSONObject(group);
        System.out.println("group:"+group);
        springGroup.setMember(jsonObject.getString("member"));
        springGroup.setGroupid(jsonObject.getString("groupid"));
        groupService.addMember(springGroup);
        System.out.println("New member Saved");
        return new ResponseEntity(null,HttpStatus.CREATED);
    }

    @PostMapping(path="/deleteMember",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> deleteMember (@RequestBody String group) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        SpringGroup springGroup = new SpringGroup();
        JSONObject jsonObject = new JSONObject(group);
        System.out.println("group:"+group);
        springGroup.setMember(jsonObject.getString("member"));
        springGroup.setGroupid(jsonObject.getString("groupid"));
        groupService.deleteMember(springGroup);
        System.out.println("Member deleted");
        return new ResponseEntity(null,HttpStatus.OK);
    }

    @PostMapping(path="/createGroup",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> createGroup (@RequestBody SpringGroup group) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
//        JSONObject jsonObject = new JSONObject(group);
//        String groupid = jsonObject.getString("groupid");
//        groupService.createGroup(groupid);
        System.out.println("New group Saved");
        groupService.createGroup(group);
        return new ResponseEntity(null,HttpStatus.CREATED);
    }

    @PostMapping(path="/deleteGroup",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> deleteGroup (@RequestBody String group) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
//        JSONObject jsonObject = new JSONObject(group);
//        String groupid = jsonObject.getString("groupid");
//        groupService.deleteGroup(groupid);

        System.out.println("New group deleted");
        return new ResponseEntity(null,HttpStatus.OK);
    }
    @PostMapping(path="/showMember",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Iterable<SpringGroup> showMember(@RequestBody SpringGroup group) {
        // This returns a JSON with the users
//        JSONObject jsonObject = new JSONObject(group);
//        String groupid = jsonObject.getString("groupid");
//        System.out.println("Find members in group");
        return groupService.showMember();
    }

}
