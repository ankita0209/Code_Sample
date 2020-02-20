const GetWeek = (myDate) => {
    var monday = new Date(myDate);
    var sunday = new Date(myDate);
    
    const dayOfWeek = myDate.getDay();
    const offsetMonday = dayOfWeek - 1;
    monday.setDate(monday.getDate() - offsetMonday);
    sunday.setDate(monday.getDate() + 6);

    const thisMondayDisplay = monday.getMonth() + 1 + '/' + monday.getDate() + '/' + monday.getFullYear();
    const nextSundayDisplay = sunday.getMonth() + 1 + '/' + sunday.getDate() + '/' + sunday.getFullYear();
    
    const TheWeek = {
        display : thisMondayDisplay + ' - ' + nextSundayDisplay,
        monday : monday,
        sunday : sunday
    }
    return TheWeek;
}

const WeekBuilder = () => {
    let weekArray = [];

    for(var i=0; i>-365; i= i-7) {
        var d = new Date();
        d.setDate(d.getDate() + i);
        weekArray.push(GetWeek(d));
    }
    return weekArray;
}

export { GetWeek, WeekBuilder };