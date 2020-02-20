import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

import {
   Row,
   Col,
   Card,
   CardHeader,
   CardBody
} from "reactstrap";
import { S3Image } from "aws-amplify-react";

class Person extends Component {
    constructor(props) {
       super(props);
       console.log(props);
    }

    handleS3ImageError = (e, einfo) => {
        console.log('inside error handler');
        console.log(e);
        console.log(einfo);
    }

    render() {
        const myPerson = this.props.data;
        var personStatus = '';
        if (myPerson.person_type === 'Victim') {
            if (myPerson.alive === 'Y') {
                personStatus = myPerson.person_type + " -- Hit";
             } else {
                personStatus = myPerson.person_type + " -- Fatality";
             }
        } else {
            if (myPerson.arrested === 'Y') {
                personStatus = myPerson.person_type + " -- Arrested";
            } else {
                personStatus = myPerson.person_type;
            }
        }
        
        return (
            <Row className="row-eq-height" key={myPerson.person_id}>
                <Col xs="12" md="6" lg="4">
                    <Card>
                        <CardHeader className="text-center">
                            <S3Image 
                                imgKey={'sbi-photos/' + myPerson.person.sbi.toUpperCase() + '.jpg'}
                                theme={{
                                    photoImg:{ width: '150px', height: '150px', borderRadius: '50%'}
                                }}
                                onError={this.handleS3ImageError.bind(this)}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className="card-title">{myPerson.person.first_name + " " + myPerson.person.last_name}</h4>
                            <p className="category text-gray font-small-4">{personStatus}</p>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col xs="12" md="8" lg="8">
                        <Card>
                           <CardBody>
                              <h4>person stuff</h4>
                              <p>Put address(es) here</p>
                              <p>Put other incident numbers (clickable) that person is associated with here</p>
                              <p>Put aliases here</p>
                              <p>Put gang associations here</p>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
        );
    }
}

export default Person;