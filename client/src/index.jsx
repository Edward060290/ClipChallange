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
      <h1>Fuzzy Search</h1>
      <FuzzySearch getTransactions={this.getTransactions}/>
      
    </div>
  )
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
