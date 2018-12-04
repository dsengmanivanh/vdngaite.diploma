import React, { Component } from 'react';

class TopBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { language} = this.props;

        return (
            <h1 className={"animated fadeInDown"}>épreuve {language}</h1>
        )
    }
}

export default TopBar;