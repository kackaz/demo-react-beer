import React, { Component } from 'react';

class BeerList extends Component {
  render() {
    return (
      <div>
      {
        this.props.beers.map(beer => (
          <p key={beer.id}>
            {beer.name}
          </p>
        ))
      }
      </div>
    );
  }
}

export default BeerList;
