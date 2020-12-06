import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = (props) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<div className={styles.search}>
			<input
				type='search'
				className={styles.search__input}
				placeholder='Search a city'
				value={inputValue}
				onChange={handleInputChange}></input>
		</div>
	);
};

export default Search;
