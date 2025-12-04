package com.example.demo;

import java.util.*;

public class Main2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println();
        System.out.println("Enter the universe of discourse: ");
        String U = sc.nextLine();

        U = U.substring(1, U.length() - 1);

        String[] universal = U.split(",\\s*");

        System.out.println("Enter the number of subsets: ");
        int numberOfSubsets = sc.nextInt();

        Vector<MySet> subsets = new Vector<MySet>();

        for (int i = 0; i < numberOfSubsets; i++) {
            MySet set = new MySet(universal);
            System.out.println("Enter the number of elements in set" + i+1);
            int numberOfElements = sc.nextInt();

            sc.nextLine();

            for (int j = 0; j < numberOfElements; j++) {
                System.out.println("Choose the element you want to set from the universal set: ");
                String element = sc.nextLine();

                set.append(element);
            }

            subsets.add(set);
        }

        for (int i = 0; i < subsets.size(); i++) {
            subsets.get(i).printSet();
        }

    }
}
