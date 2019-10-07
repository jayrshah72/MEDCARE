package com.medcare.model;

import javax.persistence.*;

@Entity
@Table(name="medicine")
public class Medicine {

	@Id
	@GeneratedValue
	private int id;

	@Column(name="name")
	private String name;

	@Column(name="contents")
	private String contents;

	@Column(name="usedfor")
	private String usedfor;

	@Column(name="price")
	private String price;

	@Column(name = "tablets")
	private String tablets;

	public Medicine() {
	}

	public Medicine(Integer medicine_id) {
    	this.id = medicine_id;
    }

    public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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
