import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav>
          <input type="text" placeholder="Search for exams" />
          <span>LOGO</span>
          <a>LOGIN/REGISTER</a>
        </nav>

      </div>
    );
  }
}

export default App;
