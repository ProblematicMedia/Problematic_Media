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
                YOUR GATEWAY TO EXCEPTIONAL SOLUTIONS.
            </div>
            <div className={styles.content}>
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
            <div>
                <div>
                Unit 2/36 Finance Pl, Malaga WA 6090
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.891327152225!2d115.8942837764799!3d-31.855172317601905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b1a9a8daaaab%3A0xb566e7abaf29b3a9!2sUnit%202%2F36%20Finance%20Pl%2C%20Malaga%20WA%206090!5e0!3m2!1sen!2sau!4v1722560726817!5m2!1sen!2sau" width="400" height="300" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
            </div>
        </div>
           
        </div>
    </div>
  );
}

export default RequestSection;
