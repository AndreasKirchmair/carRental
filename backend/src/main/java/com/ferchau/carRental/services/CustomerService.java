package com.ferchau.carRental.services;

import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    //    Create, update
    public Customer save(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer read(int id) {
        return customerRepository.findById(id).orElse(null);
    }

    public void deleteById(int id) {
        customerRepository.deleteById(id);
    }

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }
}
