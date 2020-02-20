import React, { Component } from "react";
import { Row, Col, Form, FormGroup, Label, Card, CardBody } from "reactstrap";
import Select from "react-select";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import GoogleSCMap from "../maps/google_sc";

const axios = require('axios');

export default class Step1 extends Component {
   constructor(props) {
      super(props);
      console.log(props);

      // if we already have info populate state with it
      if (props.getStore().selectedAddress.label) {
         this.state = {
            selectedAddress : props.getStore().selectedAddress,
            addressOptions : [],
            incidentMap : props.getStore().incidentMap,
            baconIsReady : true
         };
      } else {
         this.state = {
            selectedAddress : {},
            addressOptions : [],
            incidentMap : null,
            baconIsReady : true
         };
      }
   }

   buildAddress = (suggestion) => {
      let whiteSpace = "";
      if (suggestion.secondary) {
          if (suggestion.entries > 1) {
              suggestion.secondary += " (" + suggestion.entries + " entries)";
          }
          whiteSpace = " ";
      }
      return suggestion.street_line + whiteSpace + suggestion.secondary + " " + suggestion.city + ", " + suggestion.state;
   };

   async ssAutocomplete (address) {
      const endpoint = "https://us-autocomplete-pro.api.smartystreets.com/lookup?key=13000257705052277&search=";
      const include_state = "&include_only_states=NJ";
      
      try {
         const fullEndpoint = endpoint + address + include_state;
         axios.get(fullEndpoint)
         .then(res => {
           const response = res.data;
           var options = [];
           if (response.suggestions) {
              response.suggestions.map((r) => {
               var the_address = this.buildAddress(r);
               var item = {label: the_address, value: r};
               options.push(item);
            });
            this.setState({ 
               addressOptions: options
            });         
           } else {
            this.setState({ 
               addressOptions: [],
               incidentMap : null});
           }
         });    
      } catch (error) {
         console.log(error);
      }
   }

   async ssLatLong (address) {
      const endpoint = "https://us-street.api.smartystreets.com/street-address?";
      const authId = "auth-id=a41ec0fb-c13d-7f58-df9e-8d819e4dd468";
      const authToken = "auth-token=FaA7oNc1UjQ8Nntnh1CC";
      const key = "key=13000257705052277";
      const street = "street=" + encodeURI(address.value.street_line);  // need to extract only the address part
      const city = "city=" + encodeURI(address.value.city);
      const state = "state=" + address.value.state;
      const candidates = "candidates=5";
      const amp = '&';
      const config = {
         headers : {
            'Content-Type' : 'application/json'
         }
      }
      try {
         const fullEndpoint = endpoint + amp + key + amp + street + amp + city + amp + state + amp + candidates;
         axios.get(fullEndpoint, config)
         .then(res => {
           const response = res.data;
           if (response.length > 0) {
              var target = response[0];
              this.setState({ 
                  selectedAddress: address,
                  incidentMap : { incidents :
                     [{
                        incident_id: 'new',
                        lat : target.metadata.latitude,
                        long : target.metadata.longitude,
                        zipcode: target.components.zipcode,
                        county : target.metadata.county_name,
                        congressional_district : target.metadata.congressional_district,
                        carrier_route: target.metadata.carrier_route,
                        vacant : target.analysis.dpv_vacant
                     }],
                     mapCenter: {
                        lat: target.metadata.latitude,
                        lng: target.metadata.longitude
                     },
                     zoom: 19
                  }
               });         
           } else {
            this.setState({ 
               incidentMap : null
            });
           }
         });    
      } catch (error) {
         console.log(error);
      }
   }

   handleAddressInputChange = e => {
      if (e.length >= 3) this.ssAutocomplete(e);
   }

   handleAddressChange = e => {
      console.log(e);

      // need to get the lat/long for this address
      this.ssLatLong(e);
   }

   handleBaconChange = e => {
      this.setState({ baconIsReady: (e.target.checked) ? true : false });
   }

   componentDidMount() {}

   componentWillUnmount() {}

   isValidated() {
      if (this.state.selectedAddress.label) {
         this.props.updateStore({
            incidentMap : this.state.incidentMap,
            selectedAddress : this.state.selectedAddress
         });
         return true;
      } else {
         alert('A location must be selected before moving to next step.');         
         return false;
      }
   }

   render() {

      let AddressSelector;
      if (this.state.baconIsReady) {
         AddressSelector = 
            <Row>
               <Col md="6">
                  <FormGroup>  
                     <Label for="projectinput1">Address</Label>
                     <Select id="projectinput1" 
                        value={this.state.selectedAddress}
                        onInputChange={this.handleAddressInputChange}
                        onChange={this.handleAddressChange}
                        options={this.state.addressOptions} >
                     </Select>
                  </FormGroup>
               </Col>
            </Row>
      } else {
         AddressSelector = 
            <Row>
               <Col md="6">
                  <p>map selector</p>
               </Col>
            </Row>
      }

      let mapper;
      if (this.state.selectedAddress.label) {
         console.log(this.state.incidentMap);
         mapper = 
         <Row className="row-eq-height, mb-3">
            <Col sm="6" lg="6" xl="6">
               <GoogleSCMap 
                  data={this.state.incidentMap.incidents} 
                  center={this.state.incidentMap.mapCenter} 
                  zoom={this.state.incidentMap.zoom}/>
            </Col>
            <Col sm="6" lg="6" xl="6">
               <Card>
                  <CardBody>
                     <Row>
                        <Col sm="6" lg="6" xl="6">
                           Zipcode
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           {this.state.incidentMap.incidents[0].zipcode}
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           County
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           {this.state.incidentMap.incidents[0].county}
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           Congressional District
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           {this.state.incidentMap.incidents[0].congressional_district}
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           Postal Route
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           {this.state.incidentMap.incidents[0].carrier_route}
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           Is Vacant?
                        </Col>
                        <Col sm="6" lg="6" xl="6">
                           {this.state.incidentMap.incidents[0].vacant}
                        </Col>
                     </Row>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      } else {
        mapper = null; 
      }

      return (
         <div className="step step1">
            <Form>
               <div className="form-body">
                  <Row>
                     <Col md="6">
                        <label>
                           <Toggle
                              defaultChecked={this.state.baconIsReady}
                              onChange={this.handleBaconChange}
                           />
                           <span className="label-text, pl-2">Select by type-ahead</span>
                        </label>
                     </Col>
                  </Row>
                  { AddressSelector } 
                  { mapper }
               </div>
            </Form>
            <hr />
         </div>
      );
   }
}
