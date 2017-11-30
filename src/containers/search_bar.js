import React, { Component } from 'react';

export default class SearchBar extends Component {
    //constructor will run whenever this is instantiated (Searchbar instance) it runs this function
    //constructor function is always ran when an instance is instantiated 
    //setting it to an empty string in the beginning here:
    constructor(props) {
        super(props);

        this.state = { term: '' }; 

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }


    render() {
        return (
            <form className="input-group">
                <input 
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}