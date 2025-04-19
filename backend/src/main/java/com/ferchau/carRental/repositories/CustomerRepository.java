package com.ferchau.carRental.repositories;

import com.ferchau.carRental.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
