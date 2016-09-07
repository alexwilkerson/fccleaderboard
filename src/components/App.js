import React, { Component } from 'react';
import 'whatwg-fetch';
import '../App.css';
import CamperList from './camper-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { recentCampers: [], allTimeCampers: [] };
  }

  componentDidMount() {
    fetch('//fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(campers => {
        this.setState({recentCampers: campers});
      });

    fetch('//fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(campers => {
        this.setState({allTimeCampers: campers});
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Recent campers: {this.state.recentCampers.length > 0 ? "yes" : "maybe"}
        <br />
        All time campers: {this.state.allTimeCampers.length > 0 ? "yes" : "maybe"}
        <CamperList camperList={this.state.recentCampers} />
      </div>
    );
  }
}

export default App;
