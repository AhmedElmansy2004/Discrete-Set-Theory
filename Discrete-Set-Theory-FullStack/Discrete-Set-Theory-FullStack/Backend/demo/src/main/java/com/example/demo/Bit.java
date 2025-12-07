package com.example.demo;

public class Bit {

    public static int getBit(int number, int position){
        return (number >> position) & 1;
    }

    public static int setBit(int number, int position){
        return (1 << position) | number;
    }

    public static int clearBit(int number, int position){
        return ~(1 << position) & number;
    }

    public static int updateBit(int number, int position, int value){
        number = clearBit(number, position);
        return (value << position) | number;
    }
}
