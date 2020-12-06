import React, { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
	const [searchCity, setSearchCity] = useState("");

	const getSearchInput = (term) => {
		setSearchCity(term);
	};

	console.log(searchCity);

	return (
		<div className='App'>
			<Header />
			<Search getInput={getSearchInput} />
		</div>
	);
}

export default App;
