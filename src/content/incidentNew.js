import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import StepZilla from "./incidentSteps/main";
import Step1 from "./incidentSteps/Step1";
import Step2 from "./incidentSteps/Step2";
import Step3 from "./incidentSteps/Step3";
import Step4 from "./incidentSteps/Step4";
import Step5 from "./incidentSteps/Step5";
import Step6 from "./incidentSteps/Step6";

import "../assets/scss/views/form/wizard.scss"

import ContentHeader from "../components/contentHead/contentHeader";
import GoogleSCMap from "./maps/google_sc";
import { connect } from 'react-redux';
import { API, graphqlOperation }  from "aws-amplify";
import { getincident } from "../graphql/queries";

class NewIncident extends Component {
   state = {};

   sampleStore = {
      selectedAddress : '',
      incidentMap : null,
      victims: [],
      suspects: [],
      others: [],
      weapons: [],
      policeReport: '',
      incidentDate : '',
      incidentTime: '',
      savedToCloud: false
   };

   getStore() {
      return this.sampleStore;
   }

   updateStore(update) {
      this.sampleStore = {
         ...this.sampleStore,
         ...update
      };
   }

   render() {
      const steps = [
         {
            name: "Step1",
            component: (
               <Step1
                  getStore={() => this.getStore()}
                  updateStore={u => {
                     this.updateStore(u);
                  }}
               />
            )
         },
         {
            name: "Step2",
            component: (
               <Step2
                  getStore={() => this.getStore()}
                  updateStore={u => {
                     this.updateStore(u);
                  }}
               />
            )
         },
         {
            name: "Step3",
            component: (
               <Step3
                  getStore={() => this.getStore()}
                  updateStore={u => {
                     this.updateStore(u);
                  }}
               />
            )
         },
         {
            name: "Step4",
            component: (
               <Step4
                  getStore={() => this.getStore()}
                  updateStore={u => {
                     this.updateStore(u);
                  }}
               />
            )
         },
         {
            name: "Step5",
            component: (
               <Step5
                  getStore={() => this.getStore()}
                  updateStore={u => {
                     this.updateStore(u);
                  }}
               />
            )
         },
         {
            name: "Step6",
            component: (
               <Step6
                  getStore={() => this.getStore()}
                  updateStore={u => {
                     this.updateStore(u);
                  }}
               />
            )
         }
      ];

      return (
         <Fragment>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Create New Incident</CardTitle>
                        <div className="example">
                           <div className="step-progress">
                              <StepZilla
                                 steps={steps}
                                 preventEnterSubmission={true}
                                 nextTextOnFinalActionStep={"Save"}
                                 startAtStep={window.sessionStorage.getItem("step") ? parseFloat(window.sessionStorage.getItem("step")) : 0}
                                 onStepChange={step => window.sessionStorage.setItem("step", step)}
                              />
                           </div>
                        </div>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

const mapStateToProps = (state) => ({ 
    user : state.userStatus.user,
    userData : state.userStatus.userData
});
 
export default connect(mapStateToProps)(NewIncident);