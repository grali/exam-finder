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
        <div className="add-note">
          CREATE A NOTE:
          <input id="add-note" type="text" placeholder="New note..." />
          <button type="button">Add note</button>
        </div>
        <div className="featured-notes">
          FEATURED NOTES:
          <ul>
            <li>Example note 1</li>
            <li>Example note 2</li>
            <li>Example note 3</li>
          </ul>
        </div>
        <div className="my-notes">
          My notes:

        </div>
      </div>
    );
  }
}

export default App;
