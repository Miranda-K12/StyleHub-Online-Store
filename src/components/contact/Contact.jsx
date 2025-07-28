import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import styles from "./Contact.module.css";
import Button from "../../components/button/Button";
import ErrorIcon from "@mui/icons-material/Error";

const ErrorMessage = ({ error }) =>
  error && (
    <div className={styles.errorMessage}>
      <span>{error}</span>
      <ErrorIcon />
    </div>
  );

const InputField = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
}) => {
  const Tag = type === "textarea" ? "textarea" : "input";
  return (
    <div className={styles.inputWrapper}>
      <Tag
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.error : ""}`}
        rows={type === "textarea" ? 3 : undefined}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "Can’t be empty";
      }
    });
    if (
      formData.email &&
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.phone && !/^\d{6,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be at least 6 digits";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setOpenDialog(true);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactBox}>
        <h2 className={styles.contactHeader}>Contact</h2>
        <h3 className={styles.contactSubheader}>We’d Love to Hear From You!</h3>
        <p className={styles.contactText}>
          Got questions or need assistance? Our dedicated team is always ready
          to help. Whether it's a quick inquiry, a special request, or feedback,
          we're here to assist you every step of the way. We promise to respond
          as soon as possible and ensure you're fully satisfied with your
          experience.
        </p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          error={errors.name}
        />
        <InputField
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          error={errors.email}
        />
        <InputField
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          type="tel"
          error={errors.phone}
        />
        <InputField
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          error={errors.message}
          type="textarea"
        />
        <Button type="submit" bg="#fff" color="#224abe">
          Submit
        </Button>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Form Submitted</DialogTitle>
          <DialogContent>
            <p>Your form has been successfully submitted!</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} bg="#fff" color="#224abe">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
}

export default Contact;
