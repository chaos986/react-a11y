import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Hello World</h1>
          <nav>
            <a href="https://gwn-ws.com">My Web Site</a>
          </nav>
        </header>
        <main>
          <form role="search">
            <input type="search" name="search" aria-label="Search all content" />
          </form>
        </main>
      </>
    );
  }
}

export default App;
