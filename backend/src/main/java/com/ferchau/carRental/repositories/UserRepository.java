package com.ferchau.carRental.repositories;

import com.ferchau.carRental.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
}
