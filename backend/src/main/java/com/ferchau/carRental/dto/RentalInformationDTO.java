package com.ferchau.carRental.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class RentalInformationDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer customerId;

    private String carId;

}
