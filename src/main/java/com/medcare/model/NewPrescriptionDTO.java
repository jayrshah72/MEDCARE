package com.medcare.model;

import javax.persistence.Column;

public class NewPrescriptionDTO {

    @Column(name = "medicineId")
    int medicineId;

    @Column(name = "description")
    String description;

    public int getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(int medicineId) {
        this.medicineId = medicineId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public NewPrescriptionDTO(int medicineId, String description) {
        this.medicineId = medicineId;
        this.description = description;
    }

    public NewPrescriptionDTO() {
    }
}
