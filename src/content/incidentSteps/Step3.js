import React, { Component } from "react";
import { Alert, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../assets/scss/views/components/extra/editor.scss";

const defaultAlert = { hide: true, color: 'primary', message: '' };

export default class Step3 extends Component {
   constructor(props) {
      super(props);
      
      console.log('stepzilla store');

      let st = props.getStore();
      console.log(st);
      
      this.state = {
         incidentDate :'2019-11-07',
         incidentTime : '',
         alert: Object.assign({}, defaultAlert),
         editorState : EditorState.createEmpty()
      }
   }

   isValidated() {
      let d = this.state.incidentDate;
      let t = this.state.incidentTime;
      if (d === '' || t === '') {
         let alarm = {
            hide: false,
            color: 'danger',
            message: 'Date and Time fields must be completed'
         }
         this.setState({
            alert: alarm
         });
         console.log('validation failed');
         return false;
      }
      console.log('validation succeeded');
      let editorContent = convertToRaw(this.state.editorState.getCurrentContent());
      console.log(editorContent);
      this.props.updateStore({
         incidentDate: this.state.incidentDate,
         incidentTime: this.state.incidentTime,
         policeReport: editorContent
      });
      return true;
   }

   handleDateChange = e => {
      console.log('handleDateChange');
      console.log(e.target.value);
      this.setState({
         incidentDate : e.target.value
      })
   }

   handleTimeChange = e => {
      console.log('handleTimeChange');
      console.log(e.target.value);
      this.setState({
         incidentTime : e.target.value
      })
   }

   handleEditorChange = (editorState) => {
      this.setState({editorState});
   }

   render() {
      return (
         <div className="step step3">
            <Form>
               <div className="form-body">
                  <Row className="m-2">
                     <Col md="6">
                        <FormGroup>
                           <Label for="incidentDate">Incident Date</Label>
                           <Input
                              type="date"
                              id="incidentDate"
                              name="incidentDate"
                              value={this.state.incidentDate}
                              onChange={this.handleDateChange}
                           />
                        </FormGroup>
                     </Col>
                     <Col md="6">
                        <FormGroup>
                           <Label for="incidentTime">Incident Time</Label>
                           <Input
                              type="time"
                              id="incidentTime"
                              value={this.state.incidentTime}
                              onChange={this.handleTimeChange}
                           />
                        </FormGroup>
                     </Col>
                  </Row>

                  <Row className="m-2">
                     <Col md="12">
                        <FormGroup>
                           <Label for="incidentReport">Report/Narrative</Label>
                           <Editor 
                              editorClassName="demo-editor"
                              editorState={this.state.editorState}
                              onEditorStateChange={this.handleEditorChange}
                           >
                           </Editor>
                        </FormGroup>
                     </Col>
                  </Row>
                  
                  <Row className="m-2">
                     <Col sm="12">
                     <Alert
                        hidden={this.state.alert.hide}
                        color={this.state.alert.color}
                        fade={true}
                     >
                     {this.state.alert.message}
                     </Alert>
                     </Col>
                  </Row>
               </div>
            </Form>
         </div>
      );
   }
}
