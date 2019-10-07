package com.medcare.model;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name="prescription_medicine")
public class PrescriptionMedicineModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    @Column(name="description")
    private String description;

    @ManyToOne
    @JoinColumn(name="prescription_id")
    PrescriptionModel pmObj;

    @ManyToOne
    @JoinColumn(name="medicine_id")
    private Medicine medicine;

    public PrescriptionMedicineModel(Integer medicine_id, String desc) {
        this.description = desc;
        this.medicine = new Medicine(medicine_id);
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescription() {
        return description;
    }
    public void setPmObj(PrescriptionModel pmObj) {
        this.pmObj = pmObj;
    }
    public Medicine getMedicine() {
        return medicine;
    }
    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }
    public PrescriptionMedicineModel() {
    }
}