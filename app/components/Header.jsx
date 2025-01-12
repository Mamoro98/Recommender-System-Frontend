"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import aims from './aims.png'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={aims} alt="Logo" width={70} height={70} />
        <h1 className={styles.title}>Movie Recommender</h1>
      </div>
      <nav className={styles.navLinks}>
        <Link href="/">
          <span className={styles.link}>Home</span>
        </Link>
        <Link href="/about">
          <span className={styles.link}>About</span>
        </Link>
        <Link href="/Movies_by_genre">
          <span className={styles.link}>Movies by genre</span>
        </Link>
        <Link href="/search">
          <span className={styles.link}>Search</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
