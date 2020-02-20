import React, { Component, Fragment } from "react";
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    Button,
    Row,
    Col
} from "reactstrap";
import classnames from "classnames";
import Spinner from "../../components/spinner/spinner";
import Detail from './detail';
import Location from './location';
import Report from './report';
import People from './people';
import Networking from './networking';

import { API, graphqlOperation } from "aws-amplify";
import { getincident } from "../../graphql/queries";

const navTabs = ["Details", "Location", "Report", "People", "Weapons", "Networking"];
class TabsVertical extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.id);
        this.state = {
            incident_id: this.props.match.params.id,
            activeTab: "0",
            incidentData: {},
            readyToRender: false,
            victims: [],
            hits: [],
            fatalties: [],
            suspects: [],
            mode: {
                "0": "read",
                "1": "read",
                "2": "read",
                "3": "read"
            }
        };
    }

    componentDidMount() {
        this.getIncidentData(this.state.incident_id);
    }

    async getIncidentData() {
        try {
            const query = {
                incident_id: this.state.incident_id
            }
            const qResult = await API.graphql(graphqlOperation(getincident, query));
            if (qResult && qResult.data && qResult.data.getincident) {
                const incidentData = qResult.data.getincident;
                const people = incidentData.people;
                const victims = people.filter(person =>
                    person.person_type === 'Victim'
                );
                const hits = victims.filter(person =>
                    person.alive === 'Y'
                );
                const fatalaties = people.filter(person =>
                    person.alive === 'N'
                );
                this.setState({
                    initialState: qResult.data.getincident,
                    incidentData: qResult.data.getincident,
                    hits: hits,
                    fatalaties: fatalaties,
                    readyToRender: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    handleChange = (name, e) => {
        console.log("e>>>",e);
        console.log("name>>",name);
    }

    modeHandler = (value) => {
        const { activeTab, mode } = this.state;
        this.setState({ "mode": { ...mode, [activeTab]: value } });
    }

    render() {
        const { mode, activeTab, incidentData, hits, fatalaties } = this.state;
        if (this.state.readyToRender === false) {
            return (<Spinner />);
        }
        return (
            <Card>
                <CardBody>
                    <div className="tabs-vertical">
                        <Nav tabs>
                            {navTabs.map((tab, index) => (<NavItem>
                                <NavLink
                                    className={classnames({
                                        active: this.state.activeTab === index.toString()
                                    })}
                                    onClick={() => {
                                        this.toggle(index.toString());
                                    }}
                                >
                                    {tab}
                                </NavLink>
                            </NavItem>))}
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="0">
                                <Detail mode={mode[activeTab]} incidentData={{ ...incidentData, hits: hits.length, fatalaties: fatalaties.length }} handleChange={this.handleChange} />
                            </TabPane>
                            <TabPane tabId="1">
                                <Location mode={mode[activeTab]} address={incidentData.address} handleChange={this.handleChange} />
                            </TabPane>
                            <TabPane tabId="2">
                                <Report mode={mode[activeTab]} narrative={incidentData.narrative} handleChange={this.handleChange} />
                            </TabPane>
                            <TabPane tabId="3">
                                <People mode={mode[activeTab]} people={incidentData.people} handleChange={this.handleChange}/>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col sm="12">
                                        <h4>Tab 5 Contents</h4>
                                        <p>Lemon drops pastry chocolate. Jujubes sweet roll tootsie roll. Oat cake donut bonbon chocolate croissant candy candy brownie. Wafer jelly beans jelly ice cream caramels. Cookie bonbon lemon drops cheesecake brownie cake macaroon sweet. Toffee pie icing candy ice cream croissant caramels jelly. Muffin jelly gummies icing cheesecake chocolate cake. Sweet chupa chups croissant pudding sesame snaps soufflé. Marzipan cotton candy jujubes halvah cheesecake. Cupcake wafer gummies croissant candy brownie jelly. Sweet wafer chocolate halvah.</p>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Networking />
                            </TabPane>
                            <Row className="row-fix-position">
                                <Col sm="12">
                                    <div className="form-actions">
                                        {mode[activeTab] === 'read' ? activeTab === "1" ? <Fragment>
                                            <Button color="warning" className="mr-1" onClick={() => this.modeHandler("edit")}>
                                                Edit
                                            </Button>
                                            <Button color="primary" className="mr-1" onClick={() => this.modeHandler("replace")}>
                                                Replace
                                            </Button>
                                        </Fragment> : <Button color="warning" className="mr-1" onClick={() => this.modeHandler("edit")}>
                                                Edit
                                        </Button> : <Fragment>
                                                <Button color="primary" className="mr-1">
                                                    Submit
                                            </Button>
                                                <Button color="danger" className="mr-1" onClick={() => this.modeHandler("read")}>
                                                    Cancel
                                            </Button>
                                        </Fragment>}
                                    </div>
                                </Col>
                            </Row>
                        </TabContent>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default TabsVertical;
