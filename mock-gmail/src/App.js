import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import { render } from 'react-dom';
import { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(){
  super()
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
  }
  render() {
    return (
      <Router>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>

        <Switch>
          <Route exact path='/'>
            <Home emails={this.state.emails}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;


/*
<div className="App">
        <header className="App-header">
          <p>
            {this.state.emails[0].sender}
          </p>
          
        </header>
      </div>*/