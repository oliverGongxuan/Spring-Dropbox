package com.controller;

import com.service.FileService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.entity.File;

@Controller    // This means that this class is a Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="/folder") // This means URL's start with /demo (after Application path)
public class FileController {
    @Autowired
    private FileService fileService;

    @PostMapping(path="/upload",consumes = MediaType.APPLICATION_JSON_VALUE) // Map ONLY POST Requests
    public  ResponseEntity<?> addNewFile (@RequestBody String inputfile) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request


        File file = new File();
        JSONObject jsonObject = new JSONObject(inputfile);
        System.out.println("input:"+inputfile);
        try {
            file.setName(jsonObject.getString("name"));
            System.out.println("filename:"+file.getName());
            fileService.addFile(file);
        }
        catch (Exception ex) {
            return new ResponseEntity(null,HttpStatus.FAILED_DEPENDENCY);
        }

        System.out.println("Saved File");
        return new ResponseEntity(null,HttpStatus.CREATED);
    }

    @GetMapping(path="/",produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Iterable<File> getAllFiles() {
        // This returns a JSON with the users
        return fileService.getAllFile();
    }

}
