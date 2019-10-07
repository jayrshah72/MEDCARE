package com.medcare.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="doctor_details")
public class DoctorDetailsModel {
    @Id
    private int id;

    @Column(name="is_available")
    private boolean isAvailable;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

}
