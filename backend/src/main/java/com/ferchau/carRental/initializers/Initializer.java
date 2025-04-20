package com.ferchau.carRental.initializers;

import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.model.RentalInformation;
import com.ferchau.carRental.services.CarService;
import com.ferchau.carRental.services.CustomerService;
import com.ferchau.carRental.services.RentalInformationService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class Initializer implements ApplicationRunner {

    private final CustomerService customerService;

    private final CarService carService;

    private final RentalInformationService rentalInformationService;

    public Initializer(CustomerService customerService, CarService carService, RentalInformationService rentalInformationService) {
        this.customerService = customerService;
        this.carService = carService;
        this.rentalInformationService = rentalInformationService;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Customer customer1 = customerService.save(new Customer("Max", "Mustermann", "max.mustermann@gmail.com", "0512 1234567"));
        Customer customer2 = customerService.save(new Customer("Rainer", "Zufall", "rainer.zufall@gmail.com", "0512 9876543"));

        Car car1 = carService.save(new Car("1FTSW3BT0B0010172", "Ford", "Puma", 2023,"Cactus Grey", 200));
        rentalInformationService.save(new RentalInformation(customer1, car1, LocalDate.now()));
        Car car2 = carService.save(new Car("WP0AA29993S222446", "Porsche", "911 Carrera Coupé", 2025, "Gentian Blue Metallic", 3));
    }
}
