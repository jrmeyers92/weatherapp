import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<React.Fragment>
			<h1 className={styles.header__title}>Weather</h1>
			<i className={`fas fa-rainbow  ${styles.header__icon}`}></i>
		</React.Fragment>
	);
};

export default Header;
