package com.example.demo.controller;

import com.example.demo.DTO.DTO;
import com.example.demo.MySet;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;
import java.util.Vector;

@RestController
@RequestMapping
@CrossOrigin("*")
public class Controller {
    private final MySet service;
    public Controller(MySet service){
        this.service = service;
    }

    // endpoint of setting the U
    @PostMapping(path = "/getUniversalSet")
    public Set<String> getUniversalSet(DTO dto){
        return service.initU(dto.getUniversalSet());
    }

    // append to a set
    @PostMapping(path = "/getUniversalSet")
    public int append(DTO dto){
        return service.append(dto.getStr(),dto.getBitRepresentation(),dto.getUniverseMap());
    }

    // union of 2 sets
    @PostMapping(path = "/union")
    public int union(DTO dto){
        return service.union(dto.getBitRepresentation1(), dto.getBitRepresentation2());
    }

    // union of 2 sets
    @PostMapping(path = "/intersection")
    public int intersection(DTO dto){
        return service.intersection(dto.getBitRepresentation1(), dto.getBitRepresentation2());
    }

    // complement of set
    @PostMapping(path = "/complement")
    public int complement(DTO dto){
        return service.complement(dto.getBitRepresentation1(), dto.getLen_Of_Universal_Set());
    }

    // complement of set
    @PostMapping(path = "/difference")
    public int difference(DTO dto){
        return service.difference(dto.getBitRepresentation1(), dto.getBitRepresentation2());
    }

    // complement of set
    @PostMapping(path = "/getCardinality")
    public int getCardinality(DTO dto){
        return service.getCardinality(dto.getBitRepresentation1(), dto.getLen_Of_Universal_Set());
    }

    // complement of set
    @PostMapping(path = "/getElements")
    public Vector<String> getElements(DTO dto){
        return service.getElements(dto.getBitRepresentation(), dto.getUniversalSet());
    }
}
