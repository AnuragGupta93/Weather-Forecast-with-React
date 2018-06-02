import React, {Component} from 'react';
import {connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchWeather('delhi');
        this.props.fetchWeather('mumbai');
        this.props.fetchWeather('kolkata');
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return (
            <div id='SearchBar'>                
                <form className='input-group' onSubmit= {this.onFormSubmit}>              
                    <input
                        className='form-control'
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        name='term'
                        placeholder='Enter the search term'
                    />
                    <span className='input-group-btn'>
                    <button type = 'submit' className='btn btn-secondary'>Search</button>
                    </span>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}



export default connect(null, mapDispatchToProps)(SearchBar);