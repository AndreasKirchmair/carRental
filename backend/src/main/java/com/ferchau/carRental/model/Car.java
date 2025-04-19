package com.ferchau.carRental.model;

import jakarta.persistence.*;
import org.springframework.data.domain.Persistable;

import java.io.Serial;
import java.io.Serializable;

@Entity
public class Car implements Persistable<String>, Serializable {
    @Serial
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id")
    private String vehicleIdentificationNumber;

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String model;

    private int vintage;

    @Column(nullable = false)
    private String color;

    private int kilometers;

    @Transient
    private boolean isNew = true;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customerId")
    private Customer customer;

    public Car() {}

    public Car(String vehicleIdentificationNumber, String brand, String model, int vintage, String color, int kilometers) {
        this.vehicleIdentificationNumber = vehicleIdentificationNumber;
        this.brand = brand;
        this.model = model;
        this.vintage = vintage;
        this.color = color;
        this.kilometers = kilometers;
    }

    @Override
    public String getId() {
        return vehicleIdentificationNumber;
    }

    @Override
    public boolean isNew() {
        return isNew;
    }

    @PrePersist
    @PostLoad
    public void markNotNew() {
        isNew = false;
    }
}
