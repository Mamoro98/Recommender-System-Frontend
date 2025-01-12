"use client";
import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import aims from "./aims.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Personal Info */}

        <div className={styles.section}>
          <h3>Omer Mamoro</h3>
          <a
            href="https://www.linkedin.com/in/omer-kamal-40417512b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>

        <Image
          src={aims}
          alt="Your Logo"
          width={100}
          height={100}
          className={styles.logo}
        />

        {/* Professor Info */}
        <div className={styles.section}>
          <h3>Professor Ulrich Paquet </h3>
          <a
            href="https://www.linkedin.com/in/ulrich-paquet-72b6055a/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
