import React from 'react';
import './App.css';
import axios from 'axios';
import Cards from './UserCard.js'
import FollowersCards from './Followers.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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


  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <div className="User">
          <Cards user={this.state.user} followers={this.state.followers} />
        </div>
        <h1>Followers Cards:</h1>
        <div className='Followers'>
          {this.state.followers.map(follower => {
            return <FollowersCards followers={follower} />
          })}
        </div>
      </div>

    );
  }


}



export default App;
