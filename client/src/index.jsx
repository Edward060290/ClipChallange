import React from 'react';
import ReactDOM from 'react-dom';
import FuzzySearch from './components/FuzzySearch.jsx';
import Transaction from './components/Transaction.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ''
    }
  }

  render () {
    return (
    <div>
      <h1>Fuzzy Search Challange</h1>
      <FuzzySearch input ={this.state.input}/>
    </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
