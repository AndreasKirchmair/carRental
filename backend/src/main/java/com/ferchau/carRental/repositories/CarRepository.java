package com.ferchau.carRental.repositories;

import com.ferchau.carRental.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarRepository extends JpaRepository<Car, String> {

    @Query("SELECT c FROM Car c JOIN FETCH c.customer WHERE c.vehicleIdentificationNumber = :id ")
    public Car findByIdAndFetchCustomerEagerly(@Param("id") String id);

    public List<Car> findByCustomerIsNotNull();
}
