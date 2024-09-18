import React from "react";
import Header from "../Header/Header";
import styles from "./Contact.module.css";
import inst from "../../images/icons/instagram.png";
import facebook from "../../images/icons/facebook.png";
import tiktok from "../../images/icons/tik-tok.png";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactsContent}>
      <Header />
      <iframe
      title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.7016678212711!2d-82.87802733038119!3d39.94571389821997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883863eeaa10bc31%3A0xc6d1928688506e94!2sTHE%20OVEN!5e0!3m2!1sen!2sus!4v1726618150937!5m2!1sen!2sus"
        width="500"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
      <div className={styles.contactsContainer}>
        <h1>Contact Us</h1>
        <div className={styles.contactDetails}>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+1234567890">+1 614 604 8005</a>
          </p>
          <p>
            <strong>Address:</strong> 1430 S Hamilton road, Columbus
          </p>
        </div>

        <div className={styles.socialLinks}>
          <h2>Follow Us</h2>
          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.facebook.com/people/The-Oven/61565155281536/?paipv=0&eav=AfZMwJyXnxHa9yxE4TGyltI7UgVtBNqju1gZNdRFMiN6rIC-1kcxTnUTsaB4aI-LMQQ&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" className={styles.icon} />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/theoven42?igsh=MWUwaWhsYnRuanVxZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={inst} alt="Instagram" className={styles.icon} />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@theoven1430?_t=8po7tHMWlNt&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktok} alt="TikTok" className={styles.icon} />
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
