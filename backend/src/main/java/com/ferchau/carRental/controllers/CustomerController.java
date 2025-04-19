package com.ferchau.carRental.controllers;

import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.services.CustomerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/customers")
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @DeleteMapping("/customer/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteById(id);
    }
}
