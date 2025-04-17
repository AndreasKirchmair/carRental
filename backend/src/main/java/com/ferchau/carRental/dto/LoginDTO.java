package com.ferchau.carRental.dto;

import java.io.Serial;
import java.io.Serializable;

public class LoginDTO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private String username;
    private String password;
}
