import React from 'react';
import './App.css';
import axios from 'axios';
import Cards from './UserCard.js'

class App extends React.Component {
constructor (){
  super();
  this.state ={
    user: [],
    followers: [],
    
  
  }
};

componentDidMount() {
  axios
    .get('https://api.github.com/users/taylorhh5')
    // .then(res => console.log(1, res.data))
    .then(res => this.setState({ user: res.data }))
    
    .catch(err => console.log('noooo'));

    axios
    .get('https://api.github.com/users/taylorhh5/followers')
    .then(res => this.setState({ followers: res.data }))
    // .then(res => console.log(res.data))
    .catch(err => console.log('noooo'));
}


  render(){
    return(
      <div className="App">
        <Cards user= {this.state.user} followers={this.state.followers}/>
      </div>
    );
  }


}
 


export default App;
