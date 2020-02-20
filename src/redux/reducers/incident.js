const initialState = {
    incidentMap : '',
    incidentData : ''
}

const incident = (state = initialState, action) => {
    switch (action.type) {
        case 'INCIDENT_CREATE':
            state.incidentMap = action.incidentMap;
            state.incidentData = action.incidentData;
            return state;
        default:
            return state;
    }
}

export default incident;