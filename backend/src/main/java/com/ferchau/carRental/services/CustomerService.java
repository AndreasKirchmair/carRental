package com.ferchau.carRental.services;

import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Customer> read(Integer id) {
        return customerRepository.findById(id);
    }

    public void deleteById(Integer id) {
        customerRepository.deleteById(id);
    }

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }
}
