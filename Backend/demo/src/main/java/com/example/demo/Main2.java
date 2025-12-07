package com.example.demo;

import java.util.Scanner;
import java.util.Vector;

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

        System.out.println("Choose an operation (choose by number)");
        System.out.println("1. Union");
        System.out.println("2. Intersection");
        System.out.println("3. Difference");
        System.out.println("4. Complement");
        System.out.println("5. Get Cardinality");
        System.out.println("6. Print List");

        int method = sc.nextInt();
        sc.nextLine();

        if (method >= 1 && method <= 3) {
            System.out.println("Choose first set (choose by number)");
            for (int i = 1; i <= numberOfSubsets; i++)
                System.out.println(i + ". Set " + i);

            int s1 = sc.nextInt();
            sc.nextLine();
            MySet st1 = subsets.get(s1 - 1);

            System.out.println("Choose second set (choose by number)");
            for (int i = 1; i <= numberOfSubsets; i++)
                System.out.println(i + ". Set " + i);

            int s2 = sc.nextInt();
            sc.nextLine();
            MySet st2 = subsets.get(s2 - 1);

            switch(method){
                case 1 -> st1.union(st2).printSet();
                case 2 -> st1.intersection(st2).printSet();
                case 3 -> st1.difference(st2).printSet();
            }
        }
        else if (method >= 4 && method <= 6) {
            System.out.println("Choose first set (choose by number)");
            for (int i = 1; i <= numberOfSubsets; i++)
                System.out.println(i + ". Set " + i);

            int s1 = sc.nextInt();
            sc.nextLine();
            MySet st1 = subsets.get(s1 - 1);

            switch(method){
                case 4 -> st1.complement().printSet();
                case 5 -> System.out.println(st1.getCardinality());
                case 6 -> st1.printSet();
            }
        }
        else {
            System.out.println("Choose a valid method!!");
        }
    }
}
