import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends Component {
    state = {
		data:{},
		country: ""
    }
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({data: fetchedData});
	}

	handleCountryChange = async (country) => {
		//fetch the data then set the state
		const fetchedData = await fetchData(country);
		this.setState({data: fetchedData, country: country});
	}
	render() {
		return (
			<div className={styles.container}>
				<img className={ styles.image } alt="COVID-19" src={ coronaImage }/>
				<Cards data={ this.state.data }/>
				<CountryPicker handleCountryChange={this.handleCountryChange}/>
				<Chart data={ this.state.data } country={ this.state.country }/>
			</div>
		);
	}
}

export default App;
