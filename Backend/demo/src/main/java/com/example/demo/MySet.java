package com.example.demo;

import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

public class MySet {
    String[] universalSet;
    Map<String, Integer> universeMap = new HashMap<String, Integer>();
    int bitRepresentation = 0;


    public MySet(String[] universe){
        this.universalSet = universe;
        for(int i = 0; i < universe.length; i++)
            universeMap.put(universe[i], i);
    }

    public void append(String s){
        if(universeMap.get(s) == null) 
            throw new IllegalArgumentException("This element is not found in the universe of discourse");
        else{
            int position = universeMap.get(s);
            this.bitRepresentation = Bit.setBit(this.bitRepresentation, position);
        }
    }

    public MySet union(MySet s){
        MySet resultSet = new MySet(this.universalSet);
        resultSet.bitRepresentation = s.bitRepresentation | this.bitRepresentation;
        return resultSet;
    }

    public MySet intersection(MySet s){
        MySet resultSet = new MySet(this.universalSet);
        resultSet.bitRepresentation = s.bitRepresentation & this.bitRepresentation;
        return resultSet;
    }

    public MySet complement(){
        MySet resultSet = new MySet(this.universalSet);
        resultSet.bitRepresentation = ~(this.bitRepresentation) & ((1 << universalSet.length) - 1);
        return resultSet;
    }

    public MySet difference(MySet s){
        MySet resultSet = new MySet(this.universalSet);
        resultSet.bitRepresentation = ~(s.bitRepresentation) & this.bitRepresentation;
        return resultSet;
    }

    public int getCardinality(){
        int count = 0;
        for(int i = 0; i < this.universalSet.length; i++)
            count += Bit.getBit(bitRepresentation, i);
        return count;
    }

    public Vector<String> getElements(){
        Vector<String> elements = new Vector<String>();
        for(int i = 0; i < this.universalSet.length; i++)
            if(Bit.getBit(bitRepresentation, i) == 1)
                elements.add(universalSet[i]);
        return elements;
    }

    public Vector<String> getPowerSet(){
        return new Vector<String>();
    }

    //handle phi
    public void printSet(){
        for(int i = 0; i < this.universalSet.length; i++)
            if(Bit.getBit(bitRepresentation, i) == 1)
                System.out.print(universalSet[i]);

        System.out.println();
    }

}
