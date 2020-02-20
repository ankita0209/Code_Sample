// import external modules
import React, { Component, Fragment } from "react";
import Select from "react-select";
import { Row, Col, Input, Label, Card, CardBody, FormGroup } from "reactstrap";

class Location extends Component {

    inputGenerator = (type, label, name) => {
        return <Fragment>
            <Label for="date" className="text-bold-500 primary">{label}</Label>
            <Input className={
                (
                    this.props.mode === 'edit' &&
                    label !== "Validated"
                ) ? "white-background" : ""
            }
                type={type}
                id={label}
                name={name}
                value={this.props.address[name]}
                onChange={(e) => this.props.handleChange(name, e.target.value)}
                disabled={
                    (
                        this.props.mode === 'edit' &&
                        label !== "Validated"
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
                            {this.props.mode === 'replace' ? <Row>
                                <Col sm="12">
                                    <Card>
                                        <CardBody>
                                            <Row className="m-2">
                                                <Col xs="12" md="6" lg="6">
                                                    <FormGroup>  
                                                        <Label for="address" className="text-bold-500 primary">Address</Label>
                                                        <Select id="adress" 
                                                            // value={this.props.address.address}
                                                            // onInputChange={this.handleAddressInputChange}
                                                            // onChange={this.handleAddressChange}
                                                            // options={this.state.addressOptions} 
                                                        >
                                                        </Select>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row> : <Fragment>
                                    <Row className="m-2">
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "Address", "address")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "City", "city")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "County", "county")}
                                        </Col>
                                    </Row>
                                    <Row className="m-2">
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "State", "state")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("number", "Zip", "zip")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "Precinct", "precinct")}
                                        </Col>
                                    </Row>
                                    <Row className="m-2">
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "Postal Route", "")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "Congressional Destrict", "")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "School Zone", "school")}
                                        </Col>
                                    </Row>
                                    <Row className="m-2">
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("number", "Lat", "lat")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("number", "Long", "long")}
                                        </Col>
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("", "Vacant", "")}
                                        </Col>
                                    </Row>
                                    <Row className="m-2">
                                        <Col xs="12" md="4" lg="4">
                                            {this.inputGenerator("text", "Validated", "")}
                                        </Col>
                                    </Row>

                                </Fragment>}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Location;