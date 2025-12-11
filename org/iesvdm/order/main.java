package org.iesvdm.order;

import java.util.Date;

public class main {
    public static void main(String[] args) {
        
        Customer objcustomerJose = new Customer("Jose" , "c/Portugal n3"); 
        IO.print(objcustomerJose);

        Order objorder = new Order(new Date(), true, "123", 23.9, "EUR", objcustomerJose); 
        IO.print(objorder);

        objcustomerJose.addOrder(objorder);
        IO.println(objcustomerJose);

    }
}
