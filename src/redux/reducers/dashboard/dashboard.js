const initialState = {
    queryData : {},
    AllIncidentRecords : [],
    counters : {},
    charts : {},
    suspects : [],
    cities : []
}

const dashboardStore = (state = initialState, action) => {
    switch (action.type) {
        case 'DASHBOARD':
            return state;
        case 'DASHBOARD-QUERY':
            return state = {...state, queryData: action.queryData};
        case 'DASHBOARD-CITIES':
            return state = {...state, cities: action.cities};
        case 'DASHBOARD-UPDATE':
            return state = {...state, AllIncidentRecords: action.AllIncidentRecords, counters: action.counters, charts: action.charts};
        case 'DASHBOARD-SUSPECTS': 
            return state = {...state, suspects: action.suspects}
        case 'DASHBOARDRESET':
            return initialState;
        default:
            return state;
    }
}

export default dashboardStore;