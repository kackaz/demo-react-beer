import React, { Component } from 'react';
import BeerList from './components/BeerList';
import AddBeer from './components/AddBeer';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      beers: [
        {id: 1, name: 'IPA'},
        {id: 2, name: 'LAGER'},
        {id: 3, name: 'Stout'},
      ]
    }
  }

  handleAddBeer (name) {
    this.setState({
      beers: this.state.beers.concat({id: this.state.beers.length+1, name: name})
    })
  }

  render() {
    return (
      <div align="center">
        <h1>My Beer</h1>
        <AddBeer onAdd={this.handleAddBeer.bind(this)}/>
        <BeerList beers={this.state.beers} />
      </div>
    );
  }
}

export default App;
