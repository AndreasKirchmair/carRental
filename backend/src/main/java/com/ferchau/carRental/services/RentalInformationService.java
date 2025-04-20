package com.ferchau.carRental.services;

import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.model.Customer;
import com.ferchau.carRental.model.RentalInformation;
import com.ferchau.carRental.repositories.RentalInformationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RentalInformationService {

    private final RentalInformationRepository rentalInformationRepository;

    public RentalInformationService(RentalInformationRepository rentalInformationRepository) {
        this.rentalInformationRepository = rentalInformationRepository;
    }

    public RentalInformation save(RentalInformation rentalInformation) {
        return rentalInformationRepository.save(rentalInformation);
    }

    public Optional<RentalInformation> read(Integer id) {
        return rentalInformationRepository.findById(id);
    }

    public void deleteById(Integer id) {
        rentalInformationRepository.deleteById(id);
    }

    public List<RentalInformation> getAllRentalInformation() {
        return rentalInformationRepository.findAll();
    }

    public boolean existsByCustomerOrCar(Customer customer, Car car) {
        return rentalInformationRepository.existsByCustomerOrCar(customer, car);
    }
}
