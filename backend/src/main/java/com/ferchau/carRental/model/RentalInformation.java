package com.ferchau.carRental.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.springframework.data.domain.Persistable;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class RentalInformation implements Persistable<Integer>, Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne(optional = false)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToOne(optional = false)
    @JoinColumn(name = "car_id")
    private Car car;

    private LocalDate rentalDate;

    public RentalInformation() {
    }

    public RentalInformation(Customer customer, Car car, LocalDate rentalDate) {
        this.customer = customer;
        this.car = car;
        this.rentalDate = rentalDate;
    }

    @Override
    public Integer getId() {
        return id;
    }

    @Override
    @JsonIgnore
    public boolean isNew() {
        return id == null;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public LocalDate getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(LocalDate rentalDate) {
        this.rentalDate = rentalDate;
    }
}
