import React from 'react';
import axios from 'axios';

class AddCow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      'nameBar': '',
      'descriptionBar':''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescritionChange = this.handleDescritionChange.bind(this);
    this.submitButton = this.submitButton.bind(this);
  }

  handleNameChange(event) {
    this.setState({nameBar: event.target.value})
  }

  handleDescritionChange(event) {
    this.setState({descriptionBar: event.target.value})
  }

  render(){
    return (
      <form>
        <label>
          Name:
        </label>
        <input
          value={this.state.nameBar}
          onChange={this.handleNameChange}/>
        <label>
          Description:
        </label>
        <input
          value={this.state.descriptionBar}
          onChange={this.handleDescritionChange}/>
        <button onClick={this.submitButton}>Submit!</button>
      </form>
    )
  }
}

export default AddCow;

// FRONT END
// - Create a separate AddCow compoenent, must be stateful / DONE
// - create 2 label, 2 input fields, and a submit button / DONE
// - create event handler functions to allow field for input. / DONE
// - create a function for axios POST request
// - bind the function to the component  / DONE
// - Use the put the function in the onChange attr  / DONE