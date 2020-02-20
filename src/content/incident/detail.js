// import external modules
import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardBody, Input, Label, Button } from "reactstrap";

class Detail extends Component {

    inputGenerator = (type, label, name) => {
        return <Fragment>
            <Label for="date" className="text-bold-500 primary">{label}</Label>
            <Input className={
                (
                    this.props.mode === 'edit' &&
                    label !== "Incident Id" &&
                    label !== "Agency" &&
                    label !== "Created By" &&
                    label !== "Hit Count" &&
                    label !== "Fatality Count"
                ) ? "white-background" : ""
            }
                type={type}
                id={label}
                name={name}
                value={this.props.incidentData[name]}
                onChange={(e) => this.props.handleChange(name, e.target.value)}
                disabled={
                    (
                        this.props.mode === 'edit' &&
                        label !== "Incident Id" &&
                        label !== "Agency" &&
                        label !== "Created By" &&
                        label !== "Hit Count" &&
                        label !== "Fatality Count"
                    ) ? false : true
                }
            />
        </Fragment>
    };

    render() {
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Row className="m-2">
                                <Col xs="12" md="4" lg="4">
                                    {this.inputGenerator("number", "Incident Id", "incident_id")}
                                </Col>
                                <Col xs="12" md="4" lg="4">
                                    {this.inputGenerator("number", "Agency", "agency_id")}
                                </Col>
                                <Col xs="12" md="4" lg="4">
                                    {this.inputGenerator("number", "Created By", "created_by")}
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col xs="12" md="4" lg="4">
                                    {this.inputGenerator("date", "Date", "incident_date")}
                                </Col>
                                <Col xs="12" md="4" lg="4">
                                    {this.inputGenerator("time", "Time", "incident_time")}
                                </Col>
                                <Col xs="12" md="4" lg="4">
                                    {this.inputGenerator("text", "Inside/Outside", "premise")}
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col xs="12" md="6" lg="6">
                                    {this.inputGenerator("text", "Person Known", "persons_known")}
                                </Col>
                                <Col xs="12" md="6" lg="6">
                                    {this.inputGenerator("text", "Gang on Gang", "gang_on_gang")}
                                </Col>
                            </Row>
                            <Row className="m-2">
                                <Col xs="12" md="6" lg="6">
                                    {this.inputGenerator("number", "Hit Count", "hits")}
                                </Col>
                                <Col xs="12" md="6" lg="6">
                                    {this.inputGenerator("number", "Fatality Count", "fatalaties")}
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Detail;