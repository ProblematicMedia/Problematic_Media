import { useState } from "react";
import styles from "./requestSection.module.css";

const RequestSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
  return (
    <div className={styles.request}>
        <div  className={styles.container}>
            <div className={styles.title}>Get In Touch</div>
            <div className={styles.subtitle}>
                CONNECT FOR EXCELLENCE:
                <br />
                YOUR GATEWAY TO EXCEPTIONAL SOLUTIONS.</div>
            <form className={styles.form}>
        <div className={styles.formInput}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
        </div>
    </div>
  );
}

export default RequestSection;
