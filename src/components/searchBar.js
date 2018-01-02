import React, { Component } from 'react';

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = { term: '' };
   }

   handleInputChange = e => this.setState({term: e.target.value});

   render() {
      return(
         <div className = "inputContainer">
            <input 
               className = "inputField"
               value = {this.state.term}
               onChange = {this.handleInputChange}
               placeholder = "Search"
               
            />
         </div>
      );
   }
}

export default SearchBar;
