package com.medcare.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TemporaryBufferModel{

    @Id
    Integer id;
    Integer medicineId;
    String description;
    String name;
    String contents;
    String usedfor;
    String price;
    String tablets;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMedicineId() {
        return medicineId;
    }

    public void setMedicineId(Integer medicineId) {
        this.medicineId = medicineId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getUsedfor() {
        return usedfor;
    }

    public void setUsedfor(String usedfor) {
        this.usedfor = usedfor;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getTablets() {
        return tablets;
    }

    public void setTablets(String tablets) {
        this.tablets = tablets;
    }
}
