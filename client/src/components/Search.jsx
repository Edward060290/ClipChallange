import React from 'react';

class FuzzySearch extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
this.state.valueevent.preventDefault();
 }


  render() {
    return (
      <div >
        <div className="input-field">
          <label>Search</label>
         <input
           type="text"
           value={this.state.value}
           onChange={this.handleChange}
           />
         <button
           type="button"
           onSubmit={this.handleSubmit}
           >
           Search
         </button>
       </div>
      </div>
    )
  }
}

export default Search;
