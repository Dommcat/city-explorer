import React from 'react';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokemonData: [],
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      mapUrl:'',
     
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
        map:`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityDataFromAxios.data[0].lat},${cityDataFromAxios.data[0].lon}zoom=10`
      })





    //    *** FOR YOUR LAB YOU WILL NEED TO GET A MAP IMAGE SRC. Example: ***
    // ** `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&zoom=10`





    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message
      })
    }
    let mapurl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`

    let citymapFromAxios = await axios.get(mapurl)
      this.setState ({
        mapUrl:citymapFromAxios
      })
        console.log(mapurl)
  }

  render(){
    return(
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
      <Card.Img variant="top" src={this.state.map}/>
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















        {/* <form>
          <button onClick={this.handleGetPokemon}>Gotta catch them all!</button>
        </form>

        <ul>
          {this.state.pokemonData.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
        </ul> */}
      </>
    )
  }
}

export default App;




















































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
    
//     render(){
//       return(
//         <>
//           <h1>API Calls</h1>
  
//           <form onSubmit={this.getCityData}>
//             <label htmlFor=""> Pick a City!
//               <input type="text" onInput={this.handleInput} />
//               <button type='submit'>Explore</button>
//             </label>
  
//           </form>


//   // *** CITY DATA DEMO HANDLERS ***

//   handleInput = (e) => {
//     this.setState({
//       city: e.target.value
//     })
//   }

//   // async/await - handles our asynchronous code
//   // try/catch - handle our PROMISE - resolves a successful promise or handles our errors on a rejected promise

//   getCityData = async (e) => {
//     e.preventDefault();

//     try {
//       // TODO: need use axios to hit LocationIQ - async/await
//       let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

//       console.log(url);
//       let cityDataFromAxios = await axios.get(url)
//       // console.log(cityDataFromAxios.data)
//       // TODO: save that data to state
//       this.setState({
//         cityData: cityDataFromAxios.data[0],
//         error: false
//       })


//       //  *** FOR YOUR LAB YOU WILL NEED TO GET A MAP IMAGE SRC. Example: ***
//     // ** `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.3300624&zoom=10`

//     } catch (error) {
//       console.log(error);
//       this.setState({
//         error: true,
//         errorMessage: error.message
//       })
//     }

//   }

//   render(){
//     return(
//       <>
//         <h1>API Calls</h1>

//         <form onSubmit={this.getCityData}>
//           <label htmlFor=""> Pick a City!
//             <input type="text" onInput={this.handleInput} />
//             <button type='submit'>Explore</button>
//           </label>

//         </form>


//         {/* Ternary - W ? T : F */}
//         {
//           this.state.error
//           ? <p>{this.state.errorMessage}</p>
//           : <p>{this.state.cityData.display_name}</p>
//         }

//         {/* <form>
//           <button onClick={this.handleGetPokemon}>Gotta catch them all!</button>
//         </form>

//         <ul>
//           {this.state.pokemonData.map((pokemon, idx) => <li key={idx}>{pokemon.name}</li>)}
//         </ul> */}
//       </>
//     )
//   }
// }

// export default App;


// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;
