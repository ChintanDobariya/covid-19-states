import React, { Component } from 'react';

import styles from './App.module.css';
import { Cards, Charts, CountryPicker } from './Components'
import { fetchData } from './api'
import coronaImage from './Components/images/image.png'
class App extends Component {

  state = {
    data : {}
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data : fetchedData });
  }

  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({ data : fetchedData, country: country });
  }

  render() {

    const {data, country} = this.state;

    return (
      <div className={styles.container } >
        <img src={coronaImage} alt="covid-19" className={styles.image} />
       <Cards data={data} />
       <CountryPicker handleCountryChange={this.handleCountryChange} />
       <Charts data={data} country={country} />
       
      </div>
    );
  }
}

export default App;
