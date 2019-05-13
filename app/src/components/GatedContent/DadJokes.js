import React, { Component } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import { NavLink, Link, withRouter } from "react-router-dom";

class DadJokes extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        this.setState({ jokes: res.data });
        console.log("res", res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.jokes.length)
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    return (
      <div>
        <h1>The Greatest Dad Jokes of All Time</h1>
        <div>
          {this.state.jokes.map(joke => (
            <div key={joke.id}>
              <h2>{joke.joke}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default axiosWithAuth(DadJokes);
