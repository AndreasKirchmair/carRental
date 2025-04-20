package com.ferchau.carRental.services;

import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.repositories.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Car> read(String id) {
        return carRepository.findById(id);
    }

    public void deleteById(String id) {
        carRepository.deleteById(id);
    }

    public List<Car> getCars() {
        return carRepository.findAll();
    }
}
