package com.ferchau.carRental.controllers;

import com.ferchau.carRental.dto.RentalInformationDTO;
import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.model.RentalInformation;
import com.ferchau.carRental.services.CarService;
import com.ferchau.carRental.services.CustomerService;
import com.ferchau.carRental.services.RentalInformationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class RentalInformationController {

    private final RentalInformationService rentalInformationService;
    private final CustomerService customerService;
    private final CarService carService;

    public RentalInformationController(RentalInformationService rentalInformationService, CustomerService customerService, CarService carService) {
        this.rentalInformationService = rentalInformationService;
        this.customerService = customerService;
        this.carService = carService;
    }

    @GetMapping("/rental-information")
    public List<RentalInformation> getAllRentalInformation() {
        return rentalInformationService.getAllRentalInformation();
    }

    @DeleteMapping("/rental-information/{id}")
    public void deleteRentalInformation(@PathVariable Integer id) {
        rentalInformationService.deleteById(id);
    }

    @PostMapping("rental-information")
    public ResponseEntity<RentalInformation> addRentalInformation(@RequestBody RentalInformationDTO rentalInformation) {
        Optional<Customer> optionalCustomer = customerService.read(rentalInformation.getCustomerId());
        Optional<Car> optionalCar = carService.read(rentalInformation.getCarId());
        if (optionalCustomer.isEmpty() || optionalCar.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Customer customer = optionalCustomer.get();
        Car car = optionalCar.get();
        if (rentalInformationService.existsByCustomerOrCar(customer, car)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(rentalInformationService.save(new RentalInformation(customer, car, LocalDate.now())));

    }
}
