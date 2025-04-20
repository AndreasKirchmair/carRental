package com.ferchau.carRental.controllers;

import com.ferchau.carRental.model.Car;
import com.ferchau.carRental.services.CarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CarController {

    private final CarService carService;

    public CarController(CarService carService) {
        this.carService = carService;
    }

    @GetMapping("/cars")
    public List<Car> getCars() {
        return carService.getCars();
    }

    @GetMapping("/cars/{id}")
    public ResponseEntity<Car> readCar(@PathVariable String id) {
        Optional<Car> optionalCar = carService.read(id);
        if (optionalCar.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(optionalCar.get());
    }

    @DeleteMapping("/cars/{id}")
    public void deleteCar(@PathVariable String id) {
        carService.deleteById(id);
    }

    @PutMapping("/cars/{id}")
    public ResponseEntity<Car> editCar(@RequestBody Car car, @PathVariable String id) {
        Optional<Car> optionalCar = carService.read(id);
        if (optionalCar.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        car.markNotNew();
        return ResponseEntity.ok(carService.save(car));
    }

    @PostMapping("/cars")
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        Optional<Car> optionalCar = carService.read(car.getId());
        if (optionalCar.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        return ResponseEntity.ok(carService.save(car));
    }
}
