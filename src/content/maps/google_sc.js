// import external modules
import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";

import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";

const K_WIDTH = 31;
const K_HEIGHT = 31;

const incidentStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "1px solid #f44336",
  borderRadius: K_HEIGHT,
  backgroundColor: "yellow",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 9,
  fontWeight: "bold",
  padding: "9px 0px"
};

const incidentRecentStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "2px solid #f44336",
  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 9,
  fontWeight: "bold",
  padding: "9px 0px"
};

const incidentMurderStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "1px solid #ffffff",
  borderRadius: K_HEIGHT,
  backgroundColor: "red",
  textAlign: "center",
  color: "#ffffff",
  fontSize: 9,
  fontWeight: "bold",
  padding: "9px 0px"
};

const MapPinComponent = ({ text, recent }) => <div style={incidentStyle}>{text}</div>;
const MapPinMurderComponent = ({ text, recent }) => <div style={incidentMurderStyle}>{text}</div>;

class GoogleSCMap extends Component {
  state = {
    zoom: this.props.zoom || 13,
    center: {
      lat: 40.217052,
      lng: -74.742935 
    }
  };

  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)

  render() {
    console.log('GoogleSCMap render...');
    var incidentIds = [];
    //console.log(this.state.center);
    //console.log(this.props.center);
    console.log(this.props.data);
    const mapIncidents = this.props.data.map((incident) => {
      console.log(incident);
      if (!incident.incident_id) return;
      if (incidentIds.includes(incident.incident_id)) return;
      incidentIds.push(incident.incident_id);
      if (incident.alive === 'Y') {
        return (<MapPinComponent 
          key={incident.incident_id} 
          lat={incident.lat}
          lng={incident.long}
          text={incident.incident_id} />
        )
      } else {
        return(<MapPinMurderComponent
          key={incident.incident_id}
          lat={incident.lat}
          lng={incident.long}
          text={incident.incident_id} />
        )
      }
    });

    return (
      <Fragment>
        {/*
        <ContentHeader>Trenton Shooting Incidents</ContentHeader>
        <ContentSubHeader className="mb-2">
          <div>2019</div>
        </ContentSubHeader>
        */}
          <GoogleMapReact
            bootstrapURLKeys={{
              key: ""
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onClick={this._onClick}
          >
          {mapIncidents}
          </GoogleMapReact>
      </Fragment>
    );
  }
}

export default GoogleSCMap;
