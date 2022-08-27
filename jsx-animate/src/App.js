import logo from './logo.svg';
import './App.css';
import HeaderExampleUsersIcon from "./components/Header";
import {Grid, Image} from "semantic-ui-react";
import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HeaderExampleUsersIcon/>

          <Grid centered columns={4}>
            <Grid.Column>
              <img src={logo} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo1" alt="logo1" />
              <img src={logo} className="App-logo2" alt="logo2" />
            </Grid.Column>
          </Grid>


        <SearchBar></SearchBar>
        <p>
          But wait... There's more!
        </p>
        <a
          className="App-link"
          href="https://github.com/ConradMar3"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub.com/ConradMar3
        </a>
      </header>
    </div>
  );
}

export default App;
