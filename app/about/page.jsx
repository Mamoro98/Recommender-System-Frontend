"use client";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import styles from "./style.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>About This Project</h1>
        <p>
          This recommender system was developed by <strong>Omer Ebead</strong> as part of the AIMS project. It leverages the
          <strong>Alternating Least Squares (ALS)</strong> algorithm for movie recommendations, using the <strong>MovieLens dataset</strong>
          with 32 million ratings. The model achieved a <strong>Root Mean Square Error (RMSE)</strong> of 0.81.
        </p>

        <h2>Project Overview</h2>
        <p>
          The system is designed to provide personalized movie recommendations by analyzing user interactions. It solves the
          cold-start problem and ensures relevant suggestions by incorporating user and item biases.
        </p>

        <h2>Technologies Used</h2>
        <ul>
          <li>Python Flask for Backend API</li>
          <li>Next.js for Frontend UI</li>
          <li>Matrix Factorization (ALS Algorithm)</li>
          <li>MovieLens Dataset for Training and Testing</li>
        </ul>

        <h2>Contributors</h2>
        <p>
          Developed by <strong>Omer Ebead</strong> <br />
          <Link href="https://www.linkedin.com/in/omer-kamal-40417512b/">
            <span className={styles.link}>LinkedIn</span>
          </Link>
        </p>
        <p>
          Supervised by <strong>Professor Ulrich Paquet</strong> <br />
          <Link href="https://www.linkedin.com/in/ulrich-paquet-72b6055a/">
            <span className={styles.link}>LinkedIn</span>
          </Link>
        </p>

        <h2>GitHub Repositories</h2>
        <ul>
          <li>
            <Link href="https://github.com/Mamoro98/Recommender-System-Frontend">
              <span className={styles.link}>Frontend Repository</span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Mamoro98/Recommender-System-Backend">
              <span className={styles.link}>Backend Repository</span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Mamoro98/Recommender-System-Omer-AIMS">
              <span className={styles.link}>Model Repository</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
