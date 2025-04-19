package com.ferchau.carRental.services;

import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.repositories.CarRepository;
import org.springframework.stereotype.Service;

@Service
public class CarService {

    private final CarRepository carRepository;

    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    //    Create, update
    public Car save(Car car) {
        return carRepository.save(car);
    }

    public Car read(String id) {
        return carRepository.findById(id).orElse(null);
    }

    public Car readAndFetchCustomerEagerly(String id) {
        return carRepository.findByIdAndFetchCustomerEagerly(id);
    }

    public void delete(Car car) {
        carRepository.delete(car);
    }

}
