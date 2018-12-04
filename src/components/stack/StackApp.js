import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StackTabs from "./StackTabs";
import TopBar from "./TopBar";
import '../../scss/stack.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';
import { Container, Row, Col } from 'reactstrap';

class StackApp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let url = new URL(window.location);
        let language = url.searchParams.get("language");
        return (
            <Container>
                <Row className={"back"}>
                    <Col><a href={"/index.html" }>back</a> </Col>
                </Row>
                <Row className={"topbar"}>
                    <Col><TopBar language={language}/></Col>
                </Row>
                <Row>
                    <Col><StackTabs language={language}/></Col>
                </Row>
            </Container>
        )
    }
}

const wrapper = document.getElementById("reactapp");
wrapper ? ReactDOM.render(<StackApp />, wrapper) : false;
