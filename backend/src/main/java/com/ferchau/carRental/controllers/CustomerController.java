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

    @GetMapping("/customers/{id}")
    public Customer readCustomer(@PathVariable int id) {
        return customerService.read(id);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteById(id);
    }

    @PutMapping("/customers/{id}")
    public Customer editCustomer(@RequestBody Customer customer, @PathVariable int id) {
        return customerService.save(customer);
    }

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.save(customer);
    }
}
