// import external modules
import React, { Component, Fragment } from "react";
import { Row, Col, Input, Label, Card, CardBody, FormGroup } from "reactstrap";

class Report extends Component {

    render() {
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Row className="m-2">
                                <Col xs="12" md="12" lg="12">
                                    <Label for="report" className="text-bold-500 primary">Report</Label>
                                    <FormGroup>
                                        <Input
                                            type="textarea"
                                            id="projectinput8"
                                            rows="5"
                                            name="comment"
                                            value={this.props.narrative}
                                            className={this.props.mode === 'edit'? "white-background" : ""}
                                            placeholder="About Incident"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Report;