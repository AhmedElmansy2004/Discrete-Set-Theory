package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.Vector;

@Service
public class MySet {
//    String[] universalSet;
//    Map<String, Integer> universeMap = new HashMap<String, Integer>();
//    int bitRepresentation = 0;


    public Set<String> initU(String[] universe){
        Map<String, Integer> universeMap = new HashMap<>();
        for(int i = 0; i < universe.length; i++)
            universeMap.put(universe[i], i);
        return universeMap.keySet();
    }

    public int append(String s,int bitRepresentation,Map<String, Integer> universeMap){
        if(universeMap.get(s) == null) 
            throw new IllegalArgumentException("This element is not found in the universe of discourse");
        else{
            int position = universeMap.get(s);
            return Bit.setBit(bitRepresentation, position);
        }
    }

    public int union(int bitRepresentation1,int bitRepresentation2){
        return bitRepresentation1 | bitRepresentation2;
    }

    public int intersection(int bitRepresentation1,int bitRepresentation2){
        return bitRepresentation1 & bitRepresentation2;
    }

    public int complement(int bitRepresentation,int len_Of_Universal_Set){
        return ~(bitRepresentation) & ((1 << len_Of_Universal_Set) - 1);
    }

    public int difference(int bitRepresentation1,int bitRepresentation2){
        return ~(bitRepresentation1) & bitRepresentation2; // bitRepresentation2 - bitRepresentation1
    }

    public int getCardinality(int bitRepresentation,int len_Of_Universal_Set){
        int count = 0;
        for(int i = 0; i < len_Of_Universal_Set; i++)
            count += Bit.getBit(bitRepresentation, i);
        return count;
    }

    public Vector<String> getElements(int bitRepresentation,String[] universalSet){
        Vector<String> elements = new Vector<>();
        for(int i = 0; i < universalSet.length; i++)
            if(Bit.getBit(bitRepresentation, i) == 1)
                elements.add(universalSet[i]);
        return elements;
    }

//    public Vector<String> getPowerSet(){
//        return new Vector<String>();
//    }
//
//    //handle phi
//    public void printSet(){
//        for(int i = 0; i < this.universalSet.length; i++)
//            if(Bit.getBit(bitRepresentation, i) == 1)
//                System.out.print(universalSet[i]);
//
//        System.out.println();
//    }

}
