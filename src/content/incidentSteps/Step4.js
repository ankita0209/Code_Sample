import React, { Component } from "react";
import { Alert, Button, Row, Col, Card, CardTitle, CardBody, Form, FormGroup, Label, Input } from "reactstrap";
import WeaponForm from '../weaponForm';
import { Delete } from "react-feather";

const defaultAlert = { hide: true, color: 'primary', message: '' };

export default class Step4 extends Component {
    constructor(props) {
        super(props);
        let people = [];
        let suspects = props.getStore().suspects;
        people.push(suspects);
        people.push(props.getStore().victims);
        people.push(props.getStore().others);
        console.log(people);

        this.tempWeaponId = -1;
      
        this.state = {
            hideForm: true,
            weapons: [],
            alert: Object.assign({}, defaultAlert),
            people: people
        }
    }

    handleAddWeapon = () => {
        this.setState({
            hideForm: false,
            weapon_id : this.tempWeaponId--
        });
    }

    handleWeaponSubmit = w => {
        console.log('handleWeaponSubmit');
        console.log(w);
        if (w === null) {
           this.setState({
              hideForm: true
           });
           return;
        } else {
            let weapons = this.state.weapons;
            weapons.push(w);
            this.setState({
                hideForm: true,
                weapons:weapons
            });
        }
    }

    isValidated() {
        this.props.updateStore({
            weapons : this.state.weapons
        });
        return true;
    }

    handleWeaponDelete = (e) => {
        console.log('handleWeaponDelete');
        console.log(e);
        let target = this.state.weapons;
        let index = target.findIndex(v => v.weapon_id === e.weapon_id);
        target.splice(index, 1);
        this.setState({weapons: target});
    }

    handleWeaponEdit = (e) => {
        console.log('handleWeaponEdit');
        console.log(e);
    }

    render() {
        const formContainer = {
            border: '1px solid gray'
        }

        const showWeapons = this.state.weapons.map((o, idx) => {
            return (
               <Row key={o.weapon_id}>
                  <Col sm="1">
                     <Delete size={20} color="white" onClick={() => { this.handleWeaponDelete(o) }} />
                  </Col>
                  <Col sm="11">
                     <span onClick={() => { this.handleWeaponEdit(o) }}>{o.type + " " + o.class}</span>
                  </Col>
               </Row>
            )
         });

        return (
            <div className="step step4">
                <Row>
                    <Col sm="6" md="5" lg="4">
                        <h4>Weapons Involved <Button onClick={this.handleAddWeapon}>Add</Button></h4>
                    </Col>
                </Row>

                <div hidden={this.state.hideForm} style={formContainer}>
                    <WeaponForm
                        people={this.state.people}
                        weapon_id={this.tempWeaponId}
                        submitWeapon={this.handleWeaponSubmit.bind(this)}
                    />
                </div>

                <Row className="row-eq-height">
                    <Col sm="6">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardTitle>Weapons</CardTitle>
                            <CardBody>
                                {showWeapons}
                            </CardBody>
                        </Card>
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
        );
    }
}
