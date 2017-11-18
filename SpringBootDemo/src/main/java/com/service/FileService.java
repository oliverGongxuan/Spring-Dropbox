package com.service;
import com.entity.File;
import com.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public Iterable<File> getAllFile(){
        return fileRepository.findAll();
    }

    public void addFile(File file){
        fileRepository.save(file);
    }
}
