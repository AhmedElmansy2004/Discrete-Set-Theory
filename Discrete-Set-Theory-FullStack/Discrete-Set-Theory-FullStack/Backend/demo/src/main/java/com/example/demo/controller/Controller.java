package com.example.demo.controller;

import com.example.demo.DTO.DTO;
import com.example.demo.MySet;
import org.springframework.web.bind.annotation.*;

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
    public Set<String> initU(@RequestBody DTO dto){
        return service.initU(dto.getUniversalSet());
    }

    // append to a set
    @PostMapping(path = "/append")
    public int append(@RequestBody DTO dto){
        return service.append(dto.getStr(),dto.getBitRepresentation1(),dto.getUniverseMap());
    }

    // union of 2 sets
    @PostMapping(path = "/union")
    public int union(@RequestBody DTO dto){
        return service.union(dto.getBitRepresentation1(), dto.getBitRepresentation2());
    }

    // union of 2 sets
    @PostMapping(path = "/intersection")
    public int intersection(@RequestBody DTO dto){
        return service.intersection(dto.getBitRepresentation1(), dto.getBitRepresentation2());
    }

    // complement of set
    @PostMapping(path = "/complement")
    public int complement(@RequestBody DTO dto){
        return service.complement(dto.getBitRepresentation1(), dto.getLen_Of_Universal_Set());
    }

    // complement of set
    @PostMapping(path = "/difference")
    public int difference(@RequestBody DTO dto){
        return service.difference(dto.getBitRepresentation1(), dto.getBitRepresentation2());
    }

    // complement of set
    @PostMapping(path = "/getCardinality")
    public int getCardinality(@RequestBody DTO dto){
        return service.getCardinality(dto.getBitRepresentation1(), dto.getLen_Of_Universal_Set());
    }

    // complement of set
    @PostMapping(path = "/getElements")
    public Vector<String> getElements(@RequestBody DTO dto){
        return service.getElements(dto.getBitRepresentation1(), dto.getUniversalSet());
    }
}
