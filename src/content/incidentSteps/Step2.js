import React, { Component } from "react";
import { Alert, Card, CardHeader, CardBody, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button, Table } from "reactstrap";
import LookupTable from "./components/LookupTable";
import PersonForm from '../personForm';
import { API, graphqlOperation } from "aws-amplify";
import { lookuppersons } from "../../graphql/queries";
import { Delete } from "react-feather";

const defaultSelectedPerson = {
   first_name: '',
   last_name: '',
   alias: '',
   person_type: '',
   sbi: '',
   gang_member: '',
   alive: '',
   gender: '',
   race: '',
   arrested: '',
   motivation: [],
   dob: '',
   dod: '',
   motivation: '',
   motivation_comment: '',
   aliases: [],
   storedAddresses: [],
   address: []
};

const defaultSearchInput = { inputFirstName: '', inputLastName: '', inputAlias: '', inputSbi: '' };
const defaultAlert = { hide: true, color: 'primary', message: '' };

export default class Step2 extends Component {
   constructor(props) {
      super(props);
      
      this.defaultSelect = { label: 'Select...', value: '' };
      this.tempPersonId = -1;
      this.state = {
         searchInput: Object.assign({}, defaultSearchInput),
         lookupPeople: null,
         hideLookup: true,
         alert: Object.assign({}, defaultAlert),
         hideSearchPerson: true,
         hideForm: true,
         selectedPersonType: null,
         selectedPerson: Object.assign({}, defaultSelectedPerson),
         victims: [],
         suspects: [],
         others: [],
      }
      this.handlePersonDelete = this.handlePersonDelete.bind(this);
   }

   // this is a STEP validation function.  Allows step to move to next one
   isValidated() {
      console.log(this.state.victims.length);
      if (this.state.victims.length > 0) {
         this.props.updateStore({
            victims : this.state.victims,
            suspects : this.state.suspects,
            others : this.state.others
         });
         return true;
      } else {
         return false;
      }
   }

   // used to ProperCase names
   properCase(str) {
      return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
   }

   // captures field values for search fields as user inputs them
   handleSearchInput = e => {
      let si = this.state.searchInput;
      switch (e.target.name) {
         case 'firstName':
            si.inputFirstName = e.target.value;
            this.setState({ searchInput: si });
            break;
         case 'lastName':
            si.inputLastName = e.target.value;
            this.setState({ searchInput: si });
            break;
         case 'alias':
            si.inputAlias = e.target.value;
            this.setState({ searchInput: si });
            break;
         case 'sbi':
            si.inputSbi = e.target.value;
            this.setState({ searchInput: si });
            break;
      }
   }

   // handles click for Search button, opens search form, makes sure person form is hidden
   handleSearchPerson = e => {
      const alert = { hide: false, color: "primary", message: "Enter a value in at least 1 of the search fields" };
      this.setState({
         hideSearchPerson: false,
         hideForm: true,
         alert: alert
      });
   }

   // from the child LookupTable component, handles the radio button click event for selecting a record
   // transfers data from the selected record (or the search fields if nothing selected) before opening up the person form
   handlePersonSelect = (e) => {
      if (e.target.type === 'button') {
         // take values from search input and make that the "selected person"
         var selectedPerson = {
            first_name: this.properCase(this.state.searchInput.inputFirstName),
            last_name: this.properCase(this.state.searchInput.inputLastName),
            alias: this.state.searchInput.inputAlias,
            sbi: this.state.searchInput.inputSbi,
            person_id: this.tempPersonId--
         }
         this.setState({
            hideLookup: true,
            hideSearchPerson: true,
            alert: Object.assign({}, defaultAlert),
            hideForm: false,
            selectedPerson: selectedPerson,
            searchInput: Object.assign({}, defaultSearchInput)
         });
      } else {
         this.setState({
            hideLookup: true,
            hideSearchPerson: true,
            alert: Object.assign({}, defaultAlert),
            hideForm: false,
            selectedPerson: this.state.lookupPeople[e.target.value],
            searchInput: Object.assign({}, defaultSearchInput)
         });
      }
   }



   // internal function used to compress duplicate records that are showing up b/c of multiple addresses
   // also perform a ProperCase on the names while we're at it.
   squishRecords(records) {
      let newRecordSet = [];
      let prevRecord = {};
      for (var i = 0; i < records.length; i++) {
         if (prevRecord.person_id && prevRecord.person_id === records[i].person_id) {
            // dupe record, don't add it
         } else {
            // unique record, add it to newRecordSet
            records[i].first_name = this.properCase(records[i].first_name);
            records[i].last_name = this.properCase(records[i].last_name);
            newRecordSet.push(records[i]);
            prevRecord = records[i];
         }
      }
      return newRecordSet;
   }

   // when Search button is clicked, takes input from fields, performs query, opens LookupTable with results
   handleLookupPerson = async () => {
      let search = this.state.searchInput;
      if (search.inputFirstName === '' && search.inputLastName === '' && search.inputSbi === '' && search.inputAlias === '') {
         const alert = this.state.alert;
         alert.color = "warning";
         return (this.setState({
            alert: alert
         }));
      }

      try {
         const query = {
            firstName: search.inputFirstName,
            lastName: search.inputLastName,
            alias: search.inputAlias,
            sbi: search.inputSbi
         }
         const qResult = await API.graphql(graphqlOperation(lookuppersons, query));
         if (qResult && qResult.data && qResult.data.lookuppersons) {

            // because we could have multiple records for same person_id, need to consolidate before sending on
            let sRecords = this.squishRecords(qResult.data.lookuppersons);
            this.setState({
               lookupPeople: sRecords,
               hideLookup: false
            });
         } else {
            this.setState({
               lookupPeople: []
            })
         }
      } catch (error) {
         console.log(error);
      }
   }

   // From main UI, handles Add button click. Clears any data about selectedPerson and searchInput
   handleAddNewPerson = () => {
      console.log('handleAddNewPerson');
      let p = Object.assign({}, defaultSelectedPerson);
      p.person_id = this.tempPersonId--;
      this.setState({
         hideSearchPerson: true,
         hideForm: false,
         searchInput: Object.assign({}, defaultSearchInput),
         selectedPerson: p
      });
   }

   // when Submit botton clicked for person form, marshals the record to the appropriate bucket, clears selectedPerson
   handlePersonSubmit = p => {
      console.log('handlePersonSubmit');
      console.log(p);
      if (p === null) {
         this.setState({
            hideForm: true
         });
         return;
      }

      switch (p.person_type) {
         case 'Victim':
            let v = this.state.victims;
            v.push(p);
            this.setState({
               victims: v,
               selectedPerson: Object.assign({}, defaultSelectedPerson),
               selectedPersonType: null,
               hideForm: true
            });
            break;
         case 'Suspect':
            let s = this.state.suspects;
            s.push(p);
            this.setState({
               suspects: s,
               selectedPerson: Object.assign({}, defaultSelectedPerson),
               selectedPersonType: null,
               hideForm: true
            });
            break;
         case 'Witness':
            let w = this.state.others;
            w.push(p);
            this.setState({
               others: w,
               selectedPerson: Object.assign({}, defaultSelectedPerson),
               selectedPersonType: null,
               hideForm: true
            });
            break;
         case 'Law Enforcement':
            let l = this.state.others;
            l.push(p);
            this.setState({
               others: l,
               selectedPerson: Object.assign({}, defaultSelectedPerson),
               selectedPersonType: null,
               hideForm: true
            });
            break;
      }
   }

   handlePersonDelete = (e) => {
      console.log('handlePersonDelete');
      console.log(e);
      let target;
      let index;
      switch (e.person_type) {
         case 'Victim':
            target = this.state.victims;
            index = target.findIndex(v => v.person_id === e.person_id);
            target.splice(index, 1);
            this.setState({victims: target});      
            break;
         case 'Suspect':
            target = this.state.suspects;
            index = target.findIndex(v => v.person_id === e.person_id);
            target.splice(index, 1);
            this.setState({suspects: target});      
            break;
         case 'Witness':
         case 'Law Enforcement':
            target = this.state.others;
            index = target.findIndex(v => v.person_id === e.person_id);
            target.splice(index, 1);
            this.setState({others: target});      
            break;
      }
   }

   handlePersonEdit = (e) => {
      console.log('handlePersonEdit');
      console.log(e);
   }

   render() {
      let lookupResults;
      if (this.state.lookupPeople) {
         lookupResults =
            <Row hidden={this.state.hideLookup}>
               <Col>
                  <LookupTable
                     data={this.state.lookupPeople}
                     select={this.handlePersonSelect.bind(this)}
                  />
               </Col>
            </Row>
      }

      const showVictims = this.state.victims.map((v) => {
         console.log('showVictims');
         return (
            <Row key={v.person_id}>
               <Col sm="2">
                  <Delete size={20} color="white" onClick={() => { this.handlePersonDelete(v) }} />
               </Col>
               <Col sm="10">
                  <span onClick={() => { this.handlePersonEdit(v) }}>{v.first_name + " " + v.last_name}</span>
               </Col>
            </Row>
         )
      });

      const showSuspects = this.state.suspects.map((s) => {
         return (
            <Row key={s.person_id}>
               <Col sm="2">
                  <Delete size={20} color="white" onClick={() => { this.handlePersonDelete(s) }} />
               </Col>
               <Col sm="10">
                  <span onClick={() => { this.handlePersonEdit(s) }}>{s.first_name + " " + s.last_name}</span>
               </Col>
            </Row>
         )
      });


      const showOthers = this.state.others.map((o) => {
         return (
            <Row key={o.person_id}>
               <Col sm="2">
                  <Delete size={20} color="white" onClick={() => { this.handlePersonDelete(o) }} />
               </Col>
               <Col sm="10">
                  <span onClick={() => { this.handlePersonEdit(o) }}>{o.first_name + " " + o.last_name}</span>
               </Col>
            </Row>
         )
      });

      const formContainer = {
         border: '1px solid gray'
      }

      return (
         <div className="step step2">
            <Row>
               <Col sm="6" md="5" lg="4">
                  <h4>People Involved <Button onClick={this.handleSearchPerson}>Search</Button> <Button onClick={this.handleAddNewPerson}>Add</Button></h4>
               </Col>
               <Col sm="6" md="7" lg="8">
                  <Alert
                     hidden={this.state.alert.hide}
                     color={this.state.alert.color}
                     fade={true}
                  >
                     {this.state.alert.message}
                  </Alert>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Form hidden={this.state.hideSearchPerson}>
                     <div className="form-body">
                        <Row>
                           <Col md="3">
                              <FormGroup>
                                 <Label for="firstName">First Name</Label>
                                 <Input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={this.state.searchInput.inputFirstName}
                                    onChange={this.handleSearchInput} />
                              </FormGroup>
                           </Col>
                           <Col md="3">
                              <FormGroup>
                                 <Label for="lastName">Last Name</Label>
                                 <Input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={this.state.searchInput.inputLastName}
                                    onChange={this.handleSearchInput} />
                              </FormGroup>
                           </Col>
                           <Col md="2">
                              <FormGroup>
                                 <Label for="lastName">Alias</Label>
                                 <Input
                                    type="text"
                                    id="alias"
                                    name="alias"
                                    value={this.state.searchInput.inputAlias}
                                    onChange={this.handleSearchInput} />
                              </FormGroup>
                           </Col>
                           <Col md="2">
                              <FormGroup>
                                 <Label for="sbi">SBI</Label>
                                 <Input
                                    type="text"
                                    id="sbi"
                                    name="sbi"
                                    value={this.state.searchInput.inputSbi}
                                    onChange={this.handleSearchInput} />
                              </FormGroup>
                           </Col>
                           <Col md="2" className="my-auto">
                              <p />
                              <Button onClick={this.handleLookupPerson}>Lookup Person</Button>
                           </Col>
                        </Row>
                        {lookupResults}
                     </div>
                  </Form>
               </Col>
            </Row>

            {/* Person Form */}
            <div hidden={this.state.hideForm} style={formContainer}>
               <PersonForm
                  person={this.state.selectedPerson}
                  submitted={this.handlePersonSubmit.bind(this)}
               />
            </div>

            {/* Summary boxes */}
            <Row className="row-eq-height">
               <Col sm="4">
                  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                     <CardTitle>Victims</CardTitle>
                     <CardBody>
                        {showVictims}
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="4">
                  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                     <CardTitle>Suspects</CardTitle>
                     <CardBody>
                        {showSuspects}
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="4">
                  <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                     <CardTitle>Other</CardTitle>
                     <CardBody>
                        {showOthers}
                     </CardBody>
                  </Card>
               </Col>
            </Row>
            <hr />
         </div>
      )
   }
}