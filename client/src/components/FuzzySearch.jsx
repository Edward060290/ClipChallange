import React from 'react';


class FuzzySearch extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      amount: "",
      date: "",
      card_last_four: ""
    }
    this.handleAmount = this.handleAmount.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleCardInfo = this.handleCardInfo.bind(this)
  }

  handleAmount(e) {
     this.setState({
       amount: e.target.value})
  }

  handleDate(e) {
  this.setState({
    date: e.target.value})
  }

  handleCardInfo(e) {
  this.setState({
    card_last_four: e.target.value})
}

  render() {
    return (
      <div >
        <div className="input-field">
          <label>Search</label>
         <input
           type="text"
           value={this.state.last}
           onChange={this.handleAmount}
           />
         <button
           type="button"
           onSubmit={this.handleSubmit}>Search
         </button>
       </div>
      </div>
    )
  }
}

export default FuzzySearch;
