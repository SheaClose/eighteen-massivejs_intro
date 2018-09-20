import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: [],
      year_formed: 0,
      name: "",
      genre: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get("/api/bands").then(res => {
      this.setState({ bands: res.data });
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }
  handleSubmit() {
    let { year_formed, name, genre } = this.state;
    axios
      .post("/api/bands", { year_formed, name, genre })
      .then(res => this.setState({ bands: res.data }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            type="text"
          />
          <input
            placeholder="year_formed"
            name="year_formed"
            onChange={this.handleChange}
            type="number"
          />
          <input
            placeholder="genre"
            name="genre"
            onChange={this.handleChange}
            type="text"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </header>
        <p className="App-intro">
          {this.state.bands.map((band, ind) => {
            return <div key={ind}>{band.name}</div>;
          })}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
