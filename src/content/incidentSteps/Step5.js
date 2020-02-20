import React, { Component } from "react";
import {Row, Col, Label} from "reactstrap";

const defaultIncident = {
   incidentDate: "2019-11-07",
incidentTime: "01:13",
incidentMap: {
	incidents: [{
		carrier_route: "C027",
		congressional_district: "08",
		county: "Hudson",
		incident_id: "new",
		lat: 40.71344,
		long: -74.06086,
		vacant: "N",
		zipcode: "07304"
	}],
	mapCenter: {
		lat: 40.71344,
		lng: -74.06086
	}
},
others: [],
policeReport: {
	blocks: [{
		data: {},
		depth: 0,
		entityRanges:[],
		inlineStyleRanges: [],
		key: "en647",
		text: "test",
		type: "unstyled"
	}],
	entityMap: {},
},
savedToCloud: false,
selectedAddress: {
	label: "123 1/2 Maple St Jersey City, NJ",
	value: {
		city: "Jersey City",
		entries: 0,
		secondary: "",
		state: "NJ",
		street_line: "123 1/2 Maple St",
		zipcode: "07304"
	}
},
suspects: [],
victims: [{
	address: [{
		address: "518 pennington AVE  trenton New Jersey  "
	}],
	alive: "Y",
	created_by: 1,
	created_on: "2019-06-06 15:17:10.0",
	dob: "1988-11-09",
	dod: null,
	first_name: "John",
	gang_member: "N",
	gender: "M",
	last_name: "Griggs",
	person_id: 1750,
	person_type: "Victim",
	race: "B",
	sbi: "886712d",
	sbi_issuer: "NJ"
}],
weapons: [{
	ballType: ".25 cal",
	ballisticCount: "2",
	class: "Automatic",
	description: "test",
	nibin: "112135",
	person: "",
	person_id: 1750,
	projectileType: "Bullet not-fired",
	recovery_status: "Not-recovered",
	type: "Handgun",
	weapon_id: -1
}]
};

export default class Step5 extends Component {
   state = {
      incident: defaultIncident
   };

   componentDidMount() {}

   componentWillUnmount() {}

   render() {
      const store = this.props.getStore();
      console.log(store);

      const formContainer = {
         border: '1px solid gray',
         marginBottom: '20px'
      }
      
      const inc = this.state.incident;

      const showVictims = inc.victims.map(v => {
         return (
            <Col sm="6" md="9" lg="10">
               <Row>
                  <Col lg="2">
                     <Label>{v.first_name + " " + v.last_name}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"Alive: " + v.alive}</Label>
                  </Col>
                  <Col lg="8">
                     <Label>{v.address[0].address}</Label>
                  </Col>
               </Row>
            </Col>
         );
      });

      const showSuspects = inc.suspects.map(s => {
         return (
            <Col sm="6" md="9" lg="10">
               <Row>
                  <Col lg="2">
                     <Label>{s.first_name + " " + s.last_name}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"Arrested: " + s.arrested}</Label>
                  </Col>
                  <Col lg="8">
                     <Label>{s.address[0].address}</Label>
                  </Col>
               </Row>
            </Col>
         );
      });

      const showOthers = inc.others.map(o => {
         return (
            <Col sm="6" md="9" lg="10">
               <Row>
                  <Col lg="2">
                     <Label>{o.first_name + " " + o.last_name}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"Type: " + o.person_type}</Label>
                  </Col>
                  <Col lg="8">
                     <Label>{o.address[0].address}</Label>
                  </Col>
               </Row>
            </Col>
         );
      });

      const showWeapons = inc.weapons.map(w => {
         return (
            <Col sm="6" md="9" lg="10">
               <Row>
                  <Col lg="2">
                     <Label>{"Type: " + w.type}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"Class: " + w.class}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{w.recovery_status}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"Ball: " + w.ballType}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"Count: " + w.ballisticCount}</Label>
                  </Col>
                  <Col lg="2">
                     <Label>{"nibin: " + w.nibin}</Label>
                  </Col>
               </Row>
            </Col>
         );
      });

      return (
         <div className="step step5">
            <h2>Summary</h2>
            <div style={formContainer}>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Incident Date</Label>
               </Col>
               <Col sm="6" md="9" lg="10">
                  <Label>{inc.incidentDate}</Label>
               </Col>
            </Row>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Incident Time</Label>
               </Col>
               <Col sm="6" md="9" lg="10">
                  <Label>{inc.incidentTime}</Label>
               </Col>
            </Row>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Incident Address</Label>
               </Col>
               <Col sm="6" md="9" lg="10">
                  <Label>{inc.selectedAddress.label}</Label>
               </Col>
            </Row>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Victim(s)</Label>
               </Col>
               {showVictims}
            </Row>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Suspects(s)</Label>
               </Col>
               {showSuspects}
            </Row>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Other(s)</Label>
               </Col>
               {showOthers}
            </Row>
            <Row className="m-2">
               <Col sm="6" md="3" lg="2" className="text-right">
                  <Label>Weapon(s)</Label>
               </Col>
               {showWeapons}
            </Row>

            </div>
         </div>
      );
   }
}
