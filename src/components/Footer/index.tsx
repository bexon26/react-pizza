import React from "react";
import { Link, Route } from "react-router-dom";
import logoSvg from "../../assets/img/logo-family-food-versi-mobile1.png";
import About from "../../pages/About";
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img width="150" src={logoSvg} alt="Pizza logo" />
      <nav className={styles.menuList}>
        <li><Link to="about">О нас</Link></li>
        <li><Link to="delivery">Доставка и оплата</Link></li>
        <li><Link to="contacts">Контакты</Link></li>
        <li><Link to="time">Время работы</Link></li>
      </nav>
    </div>
  );
};

export default Footer;
