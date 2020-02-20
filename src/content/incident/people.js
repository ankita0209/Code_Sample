// import external modules
import React, { Component, Fragment } from "react";
import { Table, Row, Col, Card, CardBody, Input, Label } from "reactstrap";
import { S3Image } from "aws-amplify-react";
import AWS from 'aws-sdk';
import awsmobile from '../../aws-exports';
class People extends Component {
    constructor(props){
        super(props);
        this.state = {
            person_id: this.props.people[0].person_id
        }
    }

    inputGenerator = (index, type, label, name) => {
        return <Fragment>
            <Label for="date" className="text-bold-500 primary">{label}</Label>
            <Input className={
                (
                    this.props.mode === 'edit' 
                ) ? "white-background" : ""
            }
                type={type}
                id={label}
                name={name}
                value={this.props.people[index].person[name]}
                onChange={(e) => this.props.handleChange(name, e.target.value)}
                disabled={
                    (
                        this.props.mode === 'edit'
                    ) ? false : true
                }
            />
        </Fragment>
    };

    componentDidMount() {
        let headParams, s3 = new AWS.S3();
        const people = this.props.people;
        function existsOrNot(headParams, object) {
           return new Promise((resolve) => {
              s3.headObject(headParams, function (err) {
                 if (err) {
                    resolve(object['display'] = false);
                 } else {
                    resolve(object['display'] = true);
                 }
              })
           })
        }
        let promises = people.map(element => {
           headParams = { Bucket: awsmobile.aws_user_files_s3_bucket, Key: `public/sbi-photos/${element.person.sbi.toUpperCase()}.jpg` }
           return existsOrNot(headParams, element)
              .then(() => {
                 return element;
              })
        });
        Promise.all(promises)
           .then(results => {
              this.setState({ people: results })
           })
           .catch(e => {
              console.error(e);
           })
     }

    render() {
        return (
            <Row>
                <Col sm="12">
                    <Card>
                    <CardBody className="cardbody-fix-height">
                        <Row className="m-2">
                        <Col xs="12" md="12" lg="12">
                        <Table size="sm">
                           <thead>
                              <tr className="row-green">
                                <th></th>
                                <th></th>
                                <th>Name</th>
                                <th>Type</th>
                              </tr>
                           </thead>
                           <tbody>
                              {this.props.people.map((people) => {
                                const { person_id, person:{ first_name, last_name, sbi }, person_type, display } = people;
                                 return (
                                    <tr key={person_id} className="row-green">
                                       <td><Input type="radio" className="tableCheckbox" name="person" onClick={() => this.setState({person_id})}></Input></td>
                                       <td>
                                            {display ? <S3Image
                                                imgKey={`sbi-photos/${sbi.toUpperCase()}.jpg`}
                                                theme={{
                                                photoImg: { width: '50px', height: '50px', borderRadius: '50%' }
                                                }}
                                                onError={this.handleS3ImageError.bind(this)}
                                            /> : null}    
                                       </td>
                                       <td>{first_name + " " + last_name}</td>
                                       <td>{person_type}</td>
                                    </tr>
                                 )
                              })}
                           </tbody>
                        </Table>
                        </Col>
                        </Row>
                            {this.props.people.map((people, index) => {
                                const { person_id } = people;
                                if(person_id === this.state.person_id) 
                                return (
                                    <Fragment key={person_id}>
                                        <Row className="m-2">
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index, "text", "First Name", "first_name")}
                                            </Col>
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "last Name", "last_name")}
                                            </Col>
                                        </Row>
                                        <Row className="m-2">
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "SBI", "sbi")}
                                            </Col>
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"date", "DOB", "")}
                                            </Col>
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"date", "DOD", "")}
                                            </Col>
                                        </Row>
                                        <Row className="m-2">
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "Race", "race")}
                                            </Col>
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "Gender", "gender")}
                                            </Col>
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "Gang Member", "gang_member")}
                                            </Col>
                                        </Row>
                                        <Row className="m-2">
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "Alias(es)", "")}
                                            </Col>
                                            <Col xs="12" md="4" lg="4">
                                                {this.inputGenerator(index,"text", "Address(es)", "")}
                                            </Col>
                                        </Row>
                                    </Fragment>
                                ); else return null
                            })}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default People;