package com.ferchau.carRental.controllers;

import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.services.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    public ResponseEntity<Customer> readCustomer(@PathVariable int id) {
        Optional<Customer> optionalCustomer = customerService.read(id);
        if (optionalCustomer.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optionalCustomer.get());
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
