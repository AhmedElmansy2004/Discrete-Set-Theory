package com.example.demo.DTO;

import java.util.Map;

public class DTO {
    private String[] universalSet;
    private int bitRepresentation1;
    private int bitRepresentation2;
    private String str;
    private Map<String, Integer> universeMap;
    private int len_Of_Universal_Set;

    // Getters and Setters
    public String[] getUniversalSet() {
        return universalSet;
    }

    public void setUniversalSet(String[] universalSet) {
        this.universalSet = universalSet;
    }

    public int getBitRepresentation1() {
        return bitRepresentation1;
    }

    public void setBitRepresentation1(int bitRepresentation1) {
        this.bitRepresentation1 = bitRepresentation1;
    }

    public int getBitRepresentation2() {
        return bitRepresentation2;
    }

    public void setBitRepresentation2(int bitRepresentation2) {
        this.bitRepresentation2 = bitRepresentation2;
    }

    public String getStr() {
        return str;
    }

    public void setStr(String str) {
        this.str = str;
    }

    public Map<String, Integer> getUniverseMap() {
        return universeMap;
    }

    public void setUniverseMap(Map<String, Integer> universeMap) {
        this.universeMap = universeMap;
    }

    public int getLen_Of_Universal_Set() {
        return len_Of_Universal_Set;
    }

    public void setLen_Of_Universal_Set(int len_Of_Universal_Set) {
        this.len_Of_Universal_Set = len_Of_Universal_Set;
    }
}
