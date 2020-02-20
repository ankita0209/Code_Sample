// eslint-disable
// this is an auto generated file. This will be overwritten

export const getaddress = `query Getaddress($address_id: Int!) {
  getaddress(address_id: $address_id) {
    address_id
    lat
    long
    address
    city
    county
    state
    zip
    school
    created_on
    created_by
    lat_radians
    long_radians
    precinct
    description
  }
}
`;
export const listaddresss = `query Listaddresss {
  listaddresss {
    address_id
    lat
    long
    address
    city
    county
    state
    zip
    school
    created_on
    created_by
    lat_radians
    long_radians
    precinct
    description
  }
}
`;
export const getaddressPerson = `query GetaddressPerson($address_person_id: Int!) {
  getaddressPerson(address_person_id: $address_person_id) {
    address_person_id
    address_id
    person_id
  }
}
`;
export const listaddressPersons = `query ListaddressPersons {
  listaddressPersons {
    address_person_id
    address_id
    person_id
  }
}
`;
export const getagency = `query Getagency($agency_id: Int!) {
  getagency(agency_id: $agency_id) {
    agency_id
    name
    contract_num
    start_date
    end_date
    contract_rep_name
    contract_rep_email
    contract_rep_phone
    created_on
    created_by
  }
}
`;
export const listagencys = `query Listagencys {
  listagencys {
    agency_id
    name
    contract_num
    start_date
    end_date
    contract_rep_name
    contract_rep_email
    contract_rep_phone
    created_on
    created_by
  }
}
`;
export const getalias = `query Getalias($alias_id: Int!) {
  getalias(alias_id: $alias_id) {
    alias_id
    person_id
    name
    created_on
    created_by
  }
}
`;
export const listaliass = `query Listaliass {
  listaliass {
    alias_id
    person_id
    name
    created_on
    created_by
  }
}
`;
export const getballistic = `query Getballistic($ballistic_id: Int!) {
  getballistic(ballistic_id: $ballistic_id) {
    ballistic_id
    incident_id
    type
    quantity
    caliber_id
    created_on
    created_by
  }
}
`;
export const listballistics = `query Listballistics {
  listballistics {
    ballistic_id
    incident_id
    type
    quantity
    caliber_id
    created_on
    created_by
  }
}
`;
export const getcaliber = `query Getcaliber($caliber_id: Int!) {
  getcaliber(caliber_id: $caliber_id) {
    caliber_id
    name
    description
  }
}
`;
export const listcalibers = `query Listcalibers {
  listcalibers {
    caliber_id
    name
    description
  }
}
`;
export const getgang = `query Getgang($gang_id: Int!) {
  getgang(gang_id: $gang_id) {
    gang_id
    gang_name
    description
    person_id
    created_on
    created_by
  }
}
`;
export const listgangs = `query Listgangs {
  listgangs {
    gang_id
    gang_name
    description
    person_id
    created_on
    created_by
  }
}
`;
export const getgangGroup = `query GetgangGroup($group_id: Int!) {
  getgangGroup(group_id: $group_id) {
    group_id
    description
    gang_id
    created_on
    created_by
  }
}
`;
export const listgangGroups = `query ListgangGroups {
  listgangGroups {
    group_id
    description
    gang_id
    created_on
    created_by
  }
}
`;
export const getincident = `query Getincident($incident_id: Int!) {
  getincident(incident_id: $incident_id) {
    incident_id
    address {
      address_id
      lat
      long
      address
      city
      state
      zip
      school
      precinct
      description
    }
    people {
      person_id
      arrested
      motivation
      motivation_comment
      person_type
      alive
      person {
        person_id
        first_name
        last_name
        gender
        race
        gang_member
        sbi
        address {
          address_id
          person_id
          full_address
        }
        aliases {
          alias_id
          name
        }
      }
    }
    incident_date
    incident_time
    premise
    gang_on_gang
    persons_known
    narrative
    created_by
    agency_id
  }
}
`;
export const getincident2 = `query Getincident2($incident_id: Int!) {
  getincident2(incident_id: $incident_id) {
    incident_id
    address_id
    incident_date
    incident_time
    premise
    gang_on_gang
    persons_known
    created_on
    created_by
    narrative
    motivation
  }
}
`;

export const listincidents = `query Listincidents {
  listincidents {
    incident_id
    address_id
    incident_date
    incident_time
    premise
    gang_on_gang
    persons_known
    created_on
    created_by
    narrative
    motivation
  }
}
`;
export const getincidentPerson = `query GetincidentPerson($incident_id: Int!) {
  getincidentPerson(incident_id: $incident_id) {
    person_id
    incident_id
    person_type
    arrested
    created_on
    created_by
  }
}
`;
export const listincidentPersons = `query ListincidentPersons {
  listincidentPersons {
    person_id
    incident_id
    person_type
    arrested
    created_on
    created_by
  }
}
`;
export const getperson = `query Getperson($person_id: Int!) {
  getperson(person_id: $person_id) {
    person_id
    first_name
    last_name
    sbi
    gender
    race
    alive
    vks
    gang_member
    dob
    dod
    suffix
    created_on
    created_by
    sbi_issuer
  }
}
`;
export const listpersons = `query Listpersons {
  listpersons {
    person_id
    first_name
    last_name
    sbi
    gender
    race
    alive
    vks
    gang_member
    dob
    dod
    suffix
    created_on
    created_by
    sbi_issuer
  }
}
`;
export const lookuppersons = `query LookupPersons($firstName: String, $lastName: String, $sbi: String) {
  lookuppersons(firstName: $firstName, lastName: $lastName, sbi: $sbi) {
    person_id
    first_name
    last_name
    address {
      address
    }
    sbi
    gender
    race
    alive
    gang_member
    dob
    dod
    created_on
    created_by
    sbi_issuer
  }
}
`;
export const getphoto = `query Getphoto($photo_id: Int!) {
  getphoto(photo_id: $photo_id) {
    photo_id
    file_name
    person_id
    incident_id
    created_on
    created_by
  }
}
`;
export const listphotos = `query Listphotos {
  listphotos {
    photo_id
    file_name
    person_id
    incident_id
    created_on
    created_by
  }
}
`;
export const getrelNib = `query GetrelNib($nib: String!) {
  getrelNib(nib: $nib) {
    nib
    ballistic_id
    weapon_id
    person_id
  }
}
`;
export const listrelNibs = `query ListrelNibs {
  listrelNibs {
    nib
    ballistic_id
    weapon_id
    person_id
  }
}
`;
export const getrelUserRole = `query GetrelUserRole($role_id: Int!) {
  getrelUserRole(role_id: $role_id) {
    user_id
    role_id
  }
}
`;
export const listrelUserRoles = `query ListrelUserRoles {
  listrelUserRoles {
    user_id
    role_id
  }
}
`;
export const getrole = `query Getrole($role_id: Int!) {
  getrole(role_id: $role_id) {
    role_id
    name
  }
}
`;
export const listroles = `query Listroles {
  listroles {
    role_id
    name
  }
}
`;
export const getuser = `query Getuser($user_id: Int!) {
  getuser(user_id: $user_id) {
    user_id
    agency_id
    first_name
    last_name
    title
    badge
    phone
    phone_ext
    email
    ori
    created_on
    status
    created_by
    city_focus
    state
  }
}
`;
export const listusers = `query Listusers {
  listusers {
    user_id
    agency_id
    first_name
    last_name
    title
    badge
    phone
    phone_ext
    email
    ori
    created_on
    status
    created_by
  }
}
`;
export const getweapon = `query Getweapon($weapon_id: Int!) {
  getweapon(weapon_id: $weapon_id) {
    weapon_id
    serial_number
    type
    class
    description
    person_id
    incident_id
    created_on
    created_by
    recovery_status
  }
}
`;
export const listweapons = `query Listweapons {
  listweapons {
    weapon_id
    serial_number
    type
    class
    description
    person_id
    incident_id
    created_on
    created_by
    recovery_status
  }
}
`;

export const getstats = `query getstats($period: Int!, $type: String) {
  getstats {
    incident_date
    hits
    murders
    incHits
    incMurders
  }
}
`;

export const getIncidentCount = `query getincidentcount($year: Int!, $month: Int!, $city: String, $state: String, $alive: String) {
  getincidentcount {
    incident_count
  }
}`;

export const getIncidentData = `query getincidentdata($year:Int!, $month:Int!, $city:String, $state:String, $alive:String, $useFocusCity:Boolean!) {
  getincidentdata(year:$year, month:$month, city:$city, state:$state, alive:$alive, useFocusCity:$useFocusCity) {
      incident_id
      incident_date
      incident_year
      incident_month
      address
      city
      state
      zip
      lat
      long
      person_type
      alive
  }
}`;

export const getIncidentSummary = `query getincidentsummary($year:Int!, $month:Int!, $city:String, $state:String, $alive:String, $useFocusCity:Boolean!) {
  getincidentsummary(year:$year, month:$month, city:$city, state:$state, alive:$alive, useFocusCity:$useFocusCity) {
      ... on SummaryCounts {
        incident_month
        incident_count
      }
      ... on SummaryIncident {
        incident_id
        incident_date
        incident_year
        incident_month
        address
        city
        state
        zip
        lat
        long
        person_type
        alive
      }
  }
}`;

export const ListCities = `query ListCities($state:String) {
  listcities(state:$state) {
    city
  }
}`;
export const GetGeoPlace = `query getgeoplace($place_name:String!, $state:String!) {
  getgeoplace(place_name: $place_name, state: $state) {
    lat
    long
  }
}`;
export const GetSuspectSummary = `query getsuspectsummary($incident_id: [Int!]) {
  getsuspectsummary(incident_id: $incident_id) {
    incident_id
    incident_date
    first_name
    last_name
    sbi
    person_id
  }
}`;
export const GetUserCognito = `query getusercognito {
  getusercognito {
    user_id
    agency_id
    first_name
    last_name
    title
    badge
    phone
    phone_ext
    email
    ori
    status
    city_focus
    state
  }
}`;
export const GetSmartyAddresses = `query getsmartyaddresses($address: String) {
  getsmartyaddresses(address: $address) {
    fulladdress
  }
}`;
export const listaddress_typeahead = `query listaddress_typeahead(
  $state:String, 
  $address_partial:String!) {
    listaddress_typeahead(
      state:$state
      address_partial:$address_partial
    ){
      address
    }
}`;
export const ListStates = `query ListStates {liststates {state}}`;
export const ListPersonsSearch = `query ListPersonsSearch(
  $first_name:String
  $last_name:String,
  ) {
  listpersons_search(
    first_name:$first_name
    last_name:$last_name, 
  ){
    person_id
    last_name
    first_name
  }
}`;
export const ListCounties = `query ListCounties($state:String) {
  listcounties(state:$state) {
    county
  }
}`;
export const SearchIncidents = `query SearchIncidents(
	$incident_id: Int,
	$from_date: String,
	$to_date: String,
	$state: String,
	$county: String,
	$city: String,
	$district: String,
	$precinct: String,
	$post_route: String,
	$zipcode: String,
	$address: String,
	$last_name: String,
	$first_name: String,
	$sbi: String)
{
  getincidentsearch(
    incident_id: $incident_id,
    from_date: $from_date,
    to_date: $to_date,
    state: $state,
    county: $county,
    city: $city,
    district: $district,
    precinct: $precinct,
    post_route: $post_route,
    zipcode: $zipcode,
    address: $address,
    last_name: $last_name,
    first_name: $first_name,
    sbi: $sbi)
    {
      incident_id
      incident_date
      address {
        address
        city
        state
        zip
      }
    }    
}`;