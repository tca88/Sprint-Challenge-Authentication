import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:3300/";

axios.interceptors.request.use(
  function(config) {
    config.headers.authorization = localStorage.getItem("jwt");

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("jwt");
      const notLoggedIn = (
        <div>
          <h3>Please login to see users</h3>
          <Link to="/">Login</Link>
        </div>
      );

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
