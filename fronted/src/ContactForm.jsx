import React from 'react';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      // Mock API POST
      await new Promise((res) => setTimeout(res, 1500)); // fake delay
      // Normally: await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div style={styles.thankYou}>
        ✅ <h2>Thank you for reaching out!</h2>
      </div>
    );
  }

  return (
        <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.name && <p style={styles.error}>{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />
      {errors.email && <p style={styles.error}>{errors.email}</p>}
    
        <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        style={{ ...styles.input, height: "100px" }}
      />
      {errors.message && <p style={styles.error}>{errors.message}</p>}

      <button type="submit" style={styles.button} disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    
      </form>

    
  );
};
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    margin: "auto",
    padding: "1rem",
    backgroundColor: "#212121",
    color: "#fff",
    borderRadius: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #757575",
  },
  button: {
    padding: "12px",
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "-8px",
  },
  thankYou: {
    textAlign: "center",
    padding: "2rem",
    fontSize: "18px",
    color: "#fff",
  },
};


export default ContactForm
