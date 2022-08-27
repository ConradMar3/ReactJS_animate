import logo from './logo.svg';
import './App.css';
import HeaderExampleUsersIcon from "./components/Header";
import {Grid, Image} from "semantic-ui-react";
import React from "react";
import SearchBar from "./components/SearchBar";
import logo2 from './logo2.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HeaderExampleUsersIcon/>

        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo1" alt="logo" />
        <img src={logo} className="App-logo2" alt="logo" />
        <img src={logo2} className="App-logo3" alt="logo" />
        <img src={logo2} className="App-logo4" alt="logo" />
        <img src={logo2} className="App-logo5" alt="logo" />
        <img src={logo} className="App-logo6" alt="logo" />
        <img src={logo} className="App-logo7" alt="logo" />
        <img src={logo} className="App-logo8" alt="logo" />
        <img src={logo2} className="App-logo9" alt="logo" />
        <img src={logo2} className="App-logo10" alt="logo" />
        <img src={logo2} className="App-logo11" alt="logo" />
        <SearchBar></SearchBar>
        <a
            className="App-link"
            href="https://github.com/ConradMar3"
            target="_blank"
            rel="noopener noreferrer"
        >
          GitHub.com/ConradMar3
        </a>
        <p>
          Visit...
        </p>



      </header>
    </div>
  );
}

export default App;
