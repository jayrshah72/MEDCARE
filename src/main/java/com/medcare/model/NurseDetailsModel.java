package com.medcare.model;

import javax.persistence.Column;
import javax.persistence.Id;

public class NurseDetailsModel {

    @Id
    private int id;

    @Column(name="post")
    private String post;

    @Column(name="is_available")
    private boolean isAvailable;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }

    public boolean getAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }
}
