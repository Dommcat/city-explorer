import React from 'react';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      mapUrl: '',
      weatherdata: [],
    }
  }

  // *** CITY DATA DEMO HANDLERS ***

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  // async/await - handles our asynchronous code
  // try/catch - handle our PROMISE - resolves a successful promise or handles our errors on a rejected promise

  getCityData = async (e) => {
    e.preventDefault();

    try {
      // TODO: need use axios to hit LocationIQ - async/await
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      console.log(url);
      let cityDataFromAxios = await axios.get(url)
      console.log(cityDataFromAxios.data[0])
      // TODO: save that data to state
      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false,
        map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}zoom=10`
      })


    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }

 
    this.getweatherInfo()


  }



  getweatherInfo = async () => {

    let weatherurl = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`
    let weatherdataFromAxios = await axios.get(weatherurl)
    this.setState({ weatherdata: weatherdataFromAxios.data })
  }


  render() {
    console.log(this.state)
    return (
      <>
        <h1>API Calls</h1>

        <form onSubmit={this.getCityData}>
          <label htmlFor=""> Pick a City!
            <input type="text" onInput={this.handleInput} />
            <button type='submit'>Explore</button>
          </label>

        </form>

        {/* Ternary - W ? T : F */}
        {
          this.state.error
            ? <p>{this.state.errorMessage}</p>
            :
            <>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.map} />
                <Card.Body>
                  <Card.Title>{this.state.cityData.display_name}</Card.Title>
                  <Card.Text>
                    latitude: {this.state.cityData.lat}<br />
                    longitude: {this.state.cityData.lon}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
        }


      </>
    )
  }
}

export default App;







