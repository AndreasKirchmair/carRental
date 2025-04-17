package com.ferchau.carRental.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Persistable;

import java.io.Serializable;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "app_user")
public class User implements Persistable<String>, Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String username;

    @Column(nullable = false)
    private String password;

    private LocalDateTime created;

    @Override
    public String getId() {
        return getUsername();
    }

    @Override
    public boolean isNew() {
        return created == null;
    }
}
