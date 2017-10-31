import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input className="form-control"
                    placeholder="Get a 5 day forecast of your fav places"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}
