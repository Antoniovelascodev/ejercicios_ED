package org.iesvdm.order;

import java.util.Arrays;

public class Customer {
    
    public final static int ORDERS_LENGTH = 10; 

    private String name; 
    private String adress;
    private Order[] orders = new Order[ORDERS_LENGTH]; 
    private int indexOrders = 0; 


    public Customer(String name) {
        this.name = name;
    }

    public Customer(String name, String adress) {
        this.name = name;
        this.adress = adress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }


    public void addOrder (Order order){
        if (indexOrders<ORDERS_LENGTH){
          this.orders[indexOrders++] = order; 
        }else{
            IO.print("Alcanzado tamaño máximo del buffer de pedidos ");
        }
    }

    @Override
    public String toString() {
        return "Customer [name=" + name + ", adress=" + adress + ", orders=" + Arrays.toString(orders)
                + ", indexOrders=" + indexOrders + "]";
    }

    

}