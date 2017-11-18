package com.repository;

import com.entity.File;

import org.springframework.data.repository.CrudRepository;

        import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository

public interface FileRepository extends CrudRepository<File, Long> {
//    List<File> findAll();
    void save(String file);
}
