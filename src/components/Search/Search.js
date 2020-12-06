import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = (props) => {
	const [inputValue, setInputValue] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		props.getInput(inputValue);
	};

	return (
		<div className={styles.search}>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					className={styles.search__input}
					placeholder='Search a city'
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}></input>
			</form>
		</div>
	);
};

export default Search;
