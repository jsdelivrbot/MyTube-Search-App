import React, {Component} from 'react';

class SearchBar extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         term: '',
         inputValue: ''
      };
   }

   handleChange(term) {
      this.setState({
         term,
         inputValue: term
      });
   }

   handleSubmit(event) {
      event.preventDefault();
      this.props.onSearchTermChange(this.state.term);
      this.setState({inputValue: ''});
   }

   render() {
      const term = this.state.term;
      return(
         <div className = "inputContainer">
            {/* Use bind(this) because of class function */}
            <form onSubmit = {this.handleSubmit.bind(this)}>
            <input 
               type = 'text'
               className = "inputField"
               value = {this.state.inputValue}
               onChange = {event => this.handleChange(event.target.value)}
               placeholder = "Search" 
            />
            </form>
         </div>
      );
   }
}

export default SearchBar;

