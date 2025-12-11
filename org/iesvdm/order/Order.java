package org.iesvdm.order;
import java.util.Date;
public class Order {
    
    private Date dateRecieved; 
    private Boolean isPrepaid; 
    private String number;
    private double price ; 
    private String tipoMoneda;
    private Customer customer; 
    

    //Constructores

    public Order(Date dateRecieved, Boolean isPrepaid, String number, double price, String tipoMoneda, Customer customer) {
        this.dateRecieved = dateRecieved;
        this.isPrepaid = isPrepaid;
        this.number = number;
        this.price = price;
        this.tipoMoneda = tipoMoneda;
    }

    //Getters y Setters
    public Date getDateRecieved() {
        return dateRecieved;
    }

    public void setDateRecieved(Date dateRecieved) {
        this.dateRecieved = dateRecieved;
    }

    public Boolean getIsPrepaid() {
        return isPrepaid;
    }

    public void setIsPrepaid(Boolean isPrepaid) {
        this.isPrepaid = isPrepaid;
    }

    public String getNumer() {
        return number;
    }

    public void setNumer(String number) {
        this.number = number;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getTipoMoneda() {
        return tipoMoneda;
    }

    public void setTipoMoneda(String tipoMoneda) {
        this.tipoMoneda = tipoMoneda;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Order [dateRecieved=" + dateRecieved + ", isPrepaid=" + isPrepaid + ", number=" + number + ", price="
                + price + ", tipoMoneda=" + tipoMoneda + ", customer=" + customer + "]";
    }


}