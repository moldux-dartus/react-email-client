import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor()
  this.state = {
    emails: [
      {
       "sender": "katie@galvanize.com", 
       "recipient": "jane@galvanize.com" ,
       "subject": "Standup meeting", 
       "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much." , 
       "date": "2020-08-23T18:25:43.511Z", 
       "id": 1
      },
      {"sender": "jean-marc@galvanize.com", "recipient": "jane@galvanize.com" , "subject": "Retro meeting", "message": "They were the last people you’d expect to be involved in anything strange or mysterious, because they just didn’thold with such nonsense.", "date": "2020-04-23T18:25:43.511Z", "id": 2},
      {"sender": "ash@galvanize.com", "recipient": "jane@galvanize.com", "subject": "New employee next week", "message": "Mr. Dursley was the director of a fi rm called Grunnings, whichmade drills. He was a big, beefy man with hardly any neck, although he did have a very large mustache. ", "date": "2019-01-23T18:25:43.511Z", "id": 3}
    ]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
