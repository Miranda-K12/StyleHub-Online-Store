import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import styles from "./Payment.module.css";

const Payment = ({ onClose, onSuccess }) => {
  const months = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 11 }, (_, i) => String(2025 + i));
  const [formValues, setFormValues] = useState({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardHolder: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "cardNumber") {
      const onlyNums = value.replace(/\D/g, "").slice(0, 16);
      setFormValues((prev) => ({
        ...prev,
        cardNumber: onlyNums,
      }));
      return;
    }

    if (name === "cvv") {
      const onlyNums = value.replace(/\D/g, "").slice(0, 4);
      setFormValues((prev) => ({
        ...prev,
        cvv: onlyNums,
      }));
      return;
    }
    if (name === "cardHolder") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "").toUpperCase();
      setFormValues((prev) => ({
        ...prev,
        cardHolder: onlyLetters,
      }));
      return;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = "Name is required";
    if (!/^\d{16}$/.test(formValues.cardNumber))
      newErrors.cardNumber = "Card number must be 16 digits";
    if (!formValues.expiryMonth) newErrors.expiryMonth = "Select a month";
    if (!formValues.expiryYear) newErrors.expiryYear = "Select a year";
    if (!/^\d{3,4}$/.test(formValues.cvv))
      newErrors.cvv = "CVV must be 3 or 4 digits";
    if (!formValues.cardHolder)
      newErrors.cardHolder = "Card holder is required";
    if (!formValues.agreed) newErrors.agreed = "You must agree to the terms";
    if (!formValues.cardHolder) {
      newErrors.cardHolder = "Card holder is required";
    } else {
      const wordCount = formValues.cardHolder.trim().split(/\s+/).length;
      if (wordCount < 2) {
        newErrors.cardHolder = "Enter at least two words (e.g., FIRST LAST)";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSuccess();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <Typography variant="h6" gutterBottom>
          Payment Details
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Card Number"
            name="cardNumber"
            value={formValues.cardNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.cardNumber}
            helperText={errors.cardNumber}
            slotProps={{
              input: {
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 16,
              },
            }}
          />

          <TextField
            label="CVV"
            name="cvv"
            value={formValues.cvv}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.cvv}
            helperText={errors.cvv}
            slotProps={{
              input: {
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 4,
              },
            }}
          />

          <FormControl fullWidth margin="normal" error={!!errors.expiryMonth}>
            <InputLabel>Expiry Month</InputLabel>
            <Select
              name="expiryMonth"
              value={formValues.expiryMonth}
              onChange={handleChange}
              label="Expiry Month"
            >
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
            {errors.expiryMonth && (
              <Typography variant="caption" color="error">
                {errors.expiryMonth}
              </Typography>
            )}
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.expiryYear}>
            <InputLabel>Expiry Year</InputLabel>
            <Select
              name="expiryYear"
              value={formValues.expiryYear}
              onChange={handleChange}
              label="Expiry Year"
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
            {errors.expiryYear && (
              <Typography variant="caption" color="error">
                {errors.expiryYear}
              </Typography>
            )}
          </FormControl>

          <TextField
            label="Card Holder"
            name="cardHolder"
            value={formValues.cardHolder}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.cardHolder}
            helperText={errors.cardHolder}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.agreed}
                onChange={handleChange}
                name="agreed"
                color="primary"
              />
            }
            label="I agree to the terms and conditions"
          />
          {errors.agreed && (
            <Typography variant="caption" color="error">
              {errors.agreed}
            </Typography>
          )}
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              disabled={!formValues.agreed}
            >
              Complete Order
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
