// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner/spinner";
import Person from "./person";
import GoogleSCMap from "./maps/google_sc";

import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Card,
   CardHeader,
   CardBody
} from "reactstrap";
import classnames from "classnames";
import { API, graphqlOperation }  from "aws-amplify";
import { getincident } from "../graphql/queries";

//import avatarm8 from "../assets/img/portrait/medium/avatar-m-8.png";
import avatarS3 from "../assets/img/portrait/small/avatar-s-3.png";
//import avatarS5 from "../assets/img/portrait/small/avatar-s-5.png";
import avatarS6 from "../assets/img/portrait/small/avatar-s-6.png";
import avatarS9 from "../assets/img/portrait/small/avatar-s-9.png";
import avatarS11 from "../assets/img/portrait/small/avatar-s-11.png";
import avatarS12 from "../assets/img/portrait/small/avatar-s-12.png";
//import avatarS14 from "../assets/img/portrait/small/avatar-s-14.png";
//import avatarS16 from "../assets/img/portrait/small/avatar-s-16.png";
import avatarS18 from "../assets/img/portrait/small/avatar-s-18.png";
//import photo6 from "../assets/img/photos/06.jpg";
//import photo7 from "../assets/img/photos/07.jpg";
//import photo8 from "../assets/img/photos/08.jpg";
//import photo9 from "../assets/img/photos/09.jpg";
//import photo14 from "../assets/img/photos/14.jpg";
import crimescene from "../assets/img/photos/Crime-Scene.jpg";

class UserProfile extends Component {
   constructor(props){
      super(props);
      console.log('user profile props');
      console.log(props);
      console.log(props.match.params.id);
      this.state = {
         incident_id: this.props.match.params.id,
         activeTab: "1",
         incidentGeo : {},
         incidentData : {},
         readyToRender: false,
         victims: [],
         hits: [],
         fatalties: [],
         suspects: []
      };
      console.log(this.state);
   }

   componentDidMount() {
      this.getIncidentData(this.state.incident_id);
   }

   async getIncidentData() {
      console.log('getIncidentData');
      try {
         const query = {
            incident_id : this.state.incident_id
         }
         const qResult = await API.graphql(graphqlOperation(getincident, query));
         if (qResult && qResult.data && qResult.data.getincident) {
            console.log('have incident data');
            const incidentData = qResult.data.getincident;
            console.log(incidentData);
            const people = incidentData.people;
            const victims = people.filter(person => 
               person.person_type === 'Victim'
            );
            console.log('victims');
            console.log(victims);
            const hits = victims.filter(person => 
               person.alive === 'Y'
            );
            console.log('hits');
            console.log(hits);
            const fatalaties = people.filter(person => 
               person.alive === 'N'
            );
            console.log('fatalaties');
            console.log(fatalaties);
            const suspects = people.filter(person => 
               person.person_type === 'Suspect'
            );
            console.log('suspects');
            console.log(suspects);

            const incidentGeo = {incidents :
               [{
                  incident_id : incidentData.incident_id,
                  lat: incidentData.address.lat,
                  long: incidentData.address.long,
                  alive: 'Y'
               }],
               mapCenter : {
                  lat : incidentData.address.lat,
                  lng : incidentData.address.long
               }
            }
            
            this.setState({
               incidentData : qResult.data.getincident,
               incidentGeo : incidentGeo,
               readyToRender: true,
               victims : victims,
               hits: hits,
               fatalaties : fatalaties,
               suspects : suspects
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

   render() {
      if (this.state.readyToRender === false) {
         return ( <Spinner />);
      }

      const renderPeople = this.state.incidentData.people.map((person) => {
         console.log(person);
         return ( <Person data={person} />);
      });

      return (
         <Fragment>
            <Row>
               <Col xs="12" id="incident-profile">
                  <Card className="profile-with-cover">
                  
                     <Row className="media profil-cover-details">
                        <Col xs="12"><p><span style={{ color: "#bdbdc7" }}>&nbsp;</span></p></Col>
                     </Row>
                     <div className="profile-section">
                        <Row>
                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "1"
                                       })}
                                       onClick={() => {
                                          this.toggle("1");
                                       }}
                                    >
                                       Details
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "2"
                                       })}
                                       onClick={() => {
                                          this.toggle("2");
                                       }}
                                    >
                                       Report
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>

                           <Col lg="2" md="2" className="text-center">
                              <span className="font-medium-2 text-uppercase">Incident {this.state.incidentData.address.state + " " + this.state.incidentData.incident_id}</span>
                              <p className="grey font-small-2">{this.state.incidentData.incident_date + " " + this.state.incidentData.incident_time}</p>
                           </Col>

                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "3"
                                       })}
                                       onClick={() => {
                                          this.toggle("3");
                                       }}
                                    >
                                       People
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "4"
                                       })}
                                       onClick={() => {
                                          this.toggle("4");
                                       }}
                                    >
                                       Mapping
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
               {/** Incident Details */}
               <TabPane tabId="1">
                  <Row>
                     <Col xs="12">
                        <div className="content-header">Details</div>
                     </Col>
                  </Row>
                  <Row>
                     <Col sm="12">
                        <Card>
                           <CardBody>
                              <Row className="row-eq-height, mb-2">
                                 <Col xs="12" md="4" lg="4">      
                                    <span className="text-bold-500 primary">Date:</span>
                                    <span className="display-block overflow-hidden">{this.state.incidentData.incident_date + " " + this.state.incidentData.incident_time}</span>
                                 </Col>
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">Address:</span>
                                    <span className="d-block overflow-hidden">{this.state.incidentData.address.address}<br />
                                    {this.state.incidentData.address.city + ", " + this.state.incidentData.address.state + " " + this.state.incidentData.address.zip}</span>
                                 </Col>
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">Victims-Hits-Fatalties-Suspects:</span>
                                    <span className="display-block overflow-hidden">{this.state.victims.length + "-" + this.state.hits.length + "-" + this.state.fatalaties.length + "-" + this.state.suspects.length}</span>
                                 </Col>
                              </Row>
                              <Row className="row-eq-height, mb-2">
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">Precinct:</span>
                                    <span className="display-block overflow-hidden">{this.state.incidentData.address.precinct}</span>
                                 </Col>
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">School:</span>
                                    <span className="display-block overflow-hidden">{this.state.incidentData.address.school}</span>
                                 </Col>
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">Premise:</span>
                                    <span className="display-block overflow-hidden">{this.state.incidentData.premise}</span>
                                 </Col>
                              </Row>
                              <Row className="row-eq-height">
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">Persons Known:</span>
                                    <span className="display-block overflow-hidden">{this.state.incidentData.persons_known}</span>
                                 </Col>
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">Gang on Gang:</span>
                                    <span className="display-block overflow-hidden">{this.state.incidentData.gang_on_gang}</span>
                                 </Col>
                                 <Col xs="12" md="4" lg="4">
                                    <span className="text-bold-500 primary">&nbsp;</span>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
                  <Row className="row-eq-height">
                     <Col sm="12" lg="12" xl="12">
                        <GoogleSCMap data={this.state.incidentGeo.incidents} center={this.state.incidentGeo.mapCenter} zoom={15}/>
                     </Col>
                  </Row>
               </TabPane>

               {/* Incident Report */}
               <TabPane tabId="2">
                  <Row>
                     <Col xs="12">
                        <div className="content-header">Report</div>
                     </Col>
                  </Row>
                  <Row>
                     <Col sm="12">
                        <Card>
                           <CardBody>
                              <div className="mb-3">
                                 <span className="display-block overflow-hidden">{this.state.incidentData.people[0].motivation_comment}</span>
                              </div>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </TabPane>


               {/* People */}
               <TabPane tabId="3">
                  <Row>
                     <Col xs="12">
                        <div className="content-header" />
                     </Col>
                  </Row>
                  {renderPeople}
               </TabPane>

               <TabPane tabId="4">
                  <Row>
                     <Col xs="12" md="12" xl="12">
                        <div className="content-header">
                           Associated Mapping
                        </div>
                     </Col>
                  </Row>
                  <Row>
                     <Col xs="12">
                        <Card>
                           <CardBody>
                              <p>Put another Google map here. On it, put the incident location as 1 marker.</p>
                              <p>If we have it, put suspect address(es) on as a different marker</p>
                              <p>If we have it, put victim address(es) on as a 3rd marker</p>
                              <p>If we have it, put other incidents on as a 4th marker</p>
                              <p>Zoom map out far enough to include all markers in view</p>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </TabPane>
            </TabContent>
         </Fragment>
      );
   }
}

export default UserProfile;
