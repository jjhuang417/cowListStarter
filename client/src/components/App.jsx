import React from 'react';
import axios from 'axios';
import List from './List.jsx';
import AddCow from './AddCow.jsx';

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      'cows': []
    }
  }

  

  componentDidMount(){
    axios.get('/cows')
    .then((response) => {
      this.setState({cows: response.data});
    })
    .catch((error) => {
      console.log('GET Request Failed!!!');
    })
  }

  render () {
    return (
      <div>
        <h1>Cow List</h1>
        <AddCow />
        <List cows={this.state.cows}/>
      </div>
    )
  }
}

export default App;