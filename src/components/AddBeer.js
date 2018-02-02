import React, { Component } from 'react';

class AddBear extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" id="name" value={this.state.name}
        onChange={this.handleChange.bind(this)}
        />
        <button onClick={(evt) => this.props.onAdd(this.state.name)}>ADD</button>
      </div>
    );
  }
}

export default AddBear;
