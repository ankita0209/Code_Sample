const initialState = {
    allIncidentRecords : [],
    selectedIncidents: []
}

const incidentStore = (state = initialState, action) => {
    switch (action.type) {
        case 'INCIDENTS':
            return {
                ...state,
                allIncidentRecords: action.allIncidentRecords,
                selectedIncidents: action.selectedIncidents
            };
        case 'INCIDENTSRESET':
            return initialState;
        default:
            return state;
    }
}

export default incidentStore;