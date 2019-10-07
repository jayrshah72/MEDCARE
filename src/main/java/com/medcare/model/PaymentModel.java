package com.medcare.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class PaymentModel {
    @Column(name="patient_details.id")
    private int patientId;

    @Id
    @Column(name="patient_payment.id")
    private int paymentId;

    @Column(name="patient_payment.date")
    private Date paymentDate;

    @Column(name="patient_payment.payment_type_id")
    private int paymentTyepId;

    @Column(name="patient_payment.payment_mode")
    private String paymentMode;

    @Column(name="payment_type.reason")
    private String reason;

    public int getPatientId() {
        return patientId;
    }

    public void setPatientId(int patientId) {
        this.patientId = patientId;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public int getPaymentTyepId() {
        return paymentTyepId;
    }

    public void setPaymentTyepId(int paymentTyepId) {
        this.paymentTyepId = paymentTyepId;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
