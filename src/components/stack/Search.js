import React, { Component } from 'react';
import Select from 'react-select';
import StackModel from './StackModel';

class Search extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selectedOption: ''
        };
    }

    handleChange(selectedOption){
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;
        const options =  StackModel.JAVA_STACK;
        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                isMulti
                placeholder={"search"}
            />
        )
    }
}

export default Search;