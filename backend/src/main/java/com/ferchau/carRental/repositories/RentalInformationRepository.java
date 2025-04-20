package com.ferchau.carRental.repositories;

import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.model.RentalInformation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentalInformationRepository extends JpaRepository<RentalInformation, Integer> {

    public boolean existsByCustomerOrCar(Customer customer, Car car);
}
