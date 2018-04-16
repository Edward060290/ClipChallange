import React from 'react';
import ReactDOM from 'react-dom';
import FuzzySearch from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  render () {
    return (
    <div>
      <h1>Fuzzy Search Challange</h1>
      <Search input ={this.state.input}/>
    </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
