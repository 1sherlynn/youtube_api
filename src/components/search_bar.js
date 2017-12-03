//this means: import React and pull off the variable Component 
import React, { Component } from 'react'; 


// functional component
// const SearchBar = () => {
// 	return <input  />;
// }; 

class SearchBar extends Component {
	constructor(props) {
		super(props); 

		//overtime, we want to update this.state.term to be the value of the input rather than an empty string
		this.state = {term: ''}; 
	}

	render () {
		return (
			<div className="search-bar"> 
				<input 
				value={this.state.term}
				onChange={ event => this.onInputChange(event.target.value) } />
			</div>
			); 
	}
  onInputChange(term) {
  	this.setState({term}); 
  	this.props.onSearchTermChange(term); 
  }
}


export default SearchBar; 
