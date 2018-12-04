import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, CardHeader, CardBody, CardFooter, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import StackModel from './StackModel';

class StackTabs extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        const {language} = this.props;
        let stack = StackModel.SCRATCH;
        if(language === "twine"){
            stack = StackModel.TWINE;
        }else if(language ==="processing"){
            stack = StackModel.PROCESSING;
        }else if(language ==="chatbot"){
            stack = StackModel.CHATBOT;
        }else if(language==="javascript"){
            stack = StackModel.JAVASCRIPT;
        }
        console.log("language",language);
        let key = 0;
        return (
            <div>
                <Nav tabs>
                    {
                        StackModel.NAV.map((data,index) => {
                            index = index+1;
                            return (
                                <NavLink key={data} className={classnames({ active: this.state.activeTab === index.toString() },"navlink")} onClick={() => { this.toggle(index.toString()); }}>
                                    <span className={"tab"}>{data}</span>
                                </NavLink>
                            )
                        })
                    }
                </Nav>
                <TabContent activeTab={this.state.activeTab} className={"navbar"}>
                    <TabPane tabId="1">
                        <Row>
                            {
                               stack.map((data,index) => {
                                   key = key+1;
                                   index = index + 1;
                                   console.log("index=",index);
                                   return (

                                           <Col sm="12" key={key}>
                                               <Card key={key} body className={"card"} >
                                                   <CardTitle>{data.label}</CardTitle>
                                                   <CardText>{data.description}</CardText>
                                                   {
                                                       data.ref.map(r => {
                                                           key = key+1;
                                                           return <a key={key} className={"btn btn-default"} href={r.link} target="_blank">{r.title}</a>
                                                       })
                                                   }
                                               </Card>
                                           </Col>
                                   )
                               })
                            }
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default StackTabs;