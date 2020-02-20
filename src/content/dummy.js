import React, { Component } from "react";
import PersonForm from './personForm';

export default class Temp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: {},
            hideForm: false
        }    
    }

    handlePersonSubmit = p => {
        console.log('dummy submit');
        console.log(p);
        let person;
        if (p === null) {
            person = {}
        } else {
            person = p;
        }
        
        this.setState({
            selectedPerson : person,
            hideForm : true
        });
    }

    render() {
        console.log(this.state);

        return (
            <div hidden={this.state.hideForm}>
                <p>Below we include the PersonForm component</p>
                <PersonForm 
                    person={this.state.selectedPerson} 
                    submitted={this.handlePersonSubmit.bind(this)}
                />
            </div>
        )
    }
}