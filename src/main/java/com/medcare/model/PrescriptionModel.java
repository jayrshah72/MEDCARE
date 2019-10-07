package com.medcare.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name="prescription")
public class PrescriptionModel {
    @Id
    @GeneratedValue
    private int id;
    @Column(name = "date")
    private Date date;
    @Column(name = "note")
    private String note;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "patient_id")
    private PatientDetailsModel pdmod;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "doctor_id")
    private DoctorDetailsModel ddmod;

    @OneToMany(mappedBy = "pmObj" , fetch = FetchType.LAZY)
    private List<PrescriptionMedicineModel> pmmList = new ArrayList<>();

    public PatientDetailsModel getPdmod() {
        return pdmod;
    }

    public void setPdmod(PatientDetailsModel pdmod) {
        this.pdmod = pdmod;
    }

    public DoctorDetailsModel getDdmod() {
        return ddmod;
    }

    public void setDdmod(DoctorDetailsModel ddmod) {
        this.ddmod = ddmod;
    }

    public List<PrescriptionMedicineModel> getPmmList() {
        return pmmList;
    }

    public void setPmmList(List<PrescriptionMedicineModel> pmmList) {
        this.pmmList = pmmList;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}