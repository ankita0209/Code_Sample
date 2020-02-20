// eslint-disable
// this is an auto generated file. This will be overwritten

export const deleteaddress = `mutation Deleteaddress($address_id: Int!) {
  deleteaddress(address_id: $address_id) {
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
export const createaddress = `mutation Createaddress($createaddressInput: CreateaddressInput!) {
  createaddress(createaddressInput: $createaddressInput) {
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
export const updateaddress = `mutation Updateaddress($updateaddressInput: UpdateaddressInput!) {
  updateaddress(updateaddressInput: $updateaddressInput) {
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
export const deleteaddressPerson = `mutation DeleteaddressPerson($address_person_id: Int!) {
  deleteaddressPerson(address_person_id: $address_person_id) {
    address_person_id
    address_id
    person_id
  }
}
`;
export const createaddressPerson = `mutation CreateaddressPerson(
  $createaddressPersonInput: CreateaddressPersonInput!
) {
  createaddressPerson(createaddressPersonInput: $createaddressPersonInput) {
    address_person_id
    address_id
    person_id
  }
}
`;
export const updateaddressPerson = `mutation UpdateaddressPerson(
  $updateaddressPersonInput: UpdateaddressPersonInput!
) {
  updateaddressPerson(updateaddressPersonInput: $updateaddressPersonInput) {
    address_person_id
    address_id
    person_id
  }
}
`;
export const deleteagency = `mutation Deleteagency($agency_id: Int!) {
  deleteagency(agency_id: $agency_id) {
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
export const createagency = `mutation Createagency($createagencyInput: CreateagencyInput!) {
  createagency(createagencyInput: $createagencyInput) {
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
export const updateagency = `mutation Updateagency($updateagencyInput: UpdateagencyInput!) {
  updateagency(updateagencyInput: $updateagencyInput) {
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
export const deletealias = `mutation Deletealias($alias_id: Int!) {
  deletealias(alias_id: $alias_id) {
    alias_id
    person_id
    name
    created_on
    created_by
  }
}
`;
export const createalias = `mutation Createalias($createaliasInput: CreatealiasInput!) {
  createalias(createaliasInput: $createaliasInput) {
    alias_id
    person_id
    name
    created_on
    created_by
  }
}
`;
export const updatealias = `mutation Updatealias($updatealiasInput: UpdatealiasInput!) {
  updatealias(updatealiasInput: $updatealiasInput) {
    alias_id
    person_id
    name
    created_on
    created_by
  }
}
`;
export const deleteballistic = `mutation Deleteballistic($ballistic_id: Int!) {
  deleteballistic(ballistic_id: $ballistic_id) {
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
export const createballistic = `mutation Createballistic($createballisticInput: CreateballisticInput!) {
  createballistic(createballisticInput: $createballisticInput) {
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
export const updateballistic = `mutation Updateballistic($updateballisticInput: UpdateballisticInput!) {
  updateballistic(updateballisticInput: $updateballisticInput) {
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
export const deletecaliber = `mutation Deletecaliber($caliber_id: Int!) {
  deletecaliber(caliber_id: $caliber_id) {
    caliber_id
    name
    description
  }
}
`;
export const createcaliber = `mutation Createcaliber($createcaliberInput: CreatecaliberInput!) {
  createcaliber(createcaliberInput: $createcaliberInput) {
    caliber_id
    name
    description
  }
}
`;
export const updatecaliber = `mutation Updatecaliber($updatecaliberInput: UpdatecaliberInput!) {
  updatecaliber(updatecaliberInput: $updatecaliberInput) {
    caliber_id
    name
    description
  }
}
`;
export const deletegang = `mutation Deletegang($gang_id: Int!) {
  deletegang(gang_id: $gang_id) {
    gang_id
    gang_name
    description
    person_id
    created_on
    created_by
  }
}
`;
export const creategang = `mutation Creategang($creategangInput: CreategangInput!) {
  creategang(creategangInput: $creategangInput) {
    gang_id
    gang_name
    description
    person_id
    created_on
    created_by
  }
}
`;
export const updategang = `mutation Updategang($updategangInput: UpdategangInput!) {
  updategang(updategangInput: $updategangInput) {
    gang_id
    gang_name
    description
    person_id
    created_on
    created_by
  }
}
`;
export const deletegangGroup = `mutation DeletegangGroup($group_id: Int!) {
  deletegangGroup(group_id: $group_id) {
    group_id
    description
    gang_id
    created_on
    created_by
  }
}
`;
export const creategangGroup = `mutation CreategangGroup($creategangGroupInput: CreategangGroupInput!) {
  creategangGroup(creategangGroupInput: $creategangGroupInput) {
    group_id
    description
    gang_id
    created_on
    created_by
  }
}
`;
export const updategangGroup = `mutation UpdategangGroup($updategangGroupInput: UpdategangGroupInput!) {
  updategangGroup(updategangGroupInput: $updategangGroupInput) {
    group_id
    description
    gang_id
    created_on
    created_by
  }
}
`;
export const deleteincident = `mutation Deleteincident($incident_id: Int!) {
  deleteincident(incident_id: $incident_id) {
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
export const createincident = `mutation Createincident($createincidentInput: CreateincidentInput!) {
  createincident(createincidentInput: $createincidentInput) {
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
export const updateincident = `mutation Updateincident($updateincidentInput: UpdateincidentInput!) {
  updateincident(updateincidentInput: $updateincidentInput) {
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
export const deleteincidentPerson = `mutation DeleteincidentPerson($incident_id: Int!) {
  deleteincidentPerson(incident_id: $incident_id) {
    person_id
    incident_id
    person_type
    arrested
    created_on
    created_by
  }
}
`;
export const createincidentPerson = `mutation CreateincidentPerson(
  $createincidentPersonInput: CreateincidentPersonInput!
) {
  createincidentPerson(createincidentPersonInput: $createincidentPersonInput) {
    person_id
    incident_id
    person_type
    arrested
    created_on
    created_by
  }
}
`;
export const updateincidentPerson = `mutation UpdateincidentPerson(
  $updateincidentPersonInput: UpdateincidentPersonInput!
) {
  updateincidentPerson(updateincidentPersonInput: $updateincidentPersonInput) {
    person_id
    incident_id
    person_type
    arrested
    created_on
    created_by
  }
}
`;
export const deleteperson = `mutation Deleteperson($person_id: Int!) {
  deleteperson(person_id: $person_id) {
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
export const createperson = `mutation Createperson($createpersonInput: CreatepersonInput!) {
  createperson(createpersonInput: $createpersonInput) {
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
export const updateperson = `mutation Updateperson($updatepersonInput: UpdatepersonInput!) {
  updateperson(updatepersonInput: $updatepersonInput) {
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
export const deletephoto = `mutation Deletephoto($photo_id: Int!) {
  deletephoto(photo_id: $photo_id) {
    photo_id
    file_name
    person_id
    incident_id
    created_on
    created_by
  }
}
`;
export const createphoto = `mutation Createphoto($createphotoInput: CreatephotoInput!) {
  createphoto(createphotoInput: $createphotoInput) {
    photo_id
    file_name
    person_id
    incident_id
    created_on
    created_by
  }
}
`;
export const updatephoto = `mutation Updatephoto($updatephotoInput: UpdatephotoInput!) {
  updatephoto(updatephotoInput: $updatephotoInput) {
    photo_id
    file_name
    person_id
    incident_id
    created_on
    created_by
  }
}
`;
export const deleterelNib = `mutation DeleterelNib($nib: String!) {
  deleterelNib(nib: $nib) {
    nib
    ballistic_id
    weapon_id
    person_id
  }
}
`;
export const createrelNib = `mutation CreaterelNib($createrelNibInput: CreaterelNibInput!) {
  createrelNib(createrelNibInput: $createrelNibInput) {
    nib
    ballistic_id
    weapon_id
    person_id
  }
}
`;
export const updaterelNib = `mutation UpdaterelNib($updaterelNibInput: UpdaterelNibInput!) {
  updaterelNib(updaterelNibInput: $updaterelNibInput) {
    nib
    ballistic_id
    weapon_id
    person_id
  }
}
`;
export const deleterelUserRole = `mutation DeleterelUserRole($role_id: Int!) {
  deleterelUserRole(role_id: $role_id) {
    user_id
    role_id
  }
}
`;
export const createrelUserRole = `mutation CreaterelUserRole($createrelUserRoleInput: CreaterelUserRoleInput!) {
  createrelUserRole(createrelUserRoleInput: $createrelUserRoleInput) {
    user_id
    role_id
  }
}
`;
export const updaterelUserRole = `mutation UpdaterelUserRole($updaterelUserRoleInput: UpdaterelUserRoleInput!) {
  updaterelUserRole(updaterelUserRoleInput: $updaterelUserRoleInput) {
    user_id
    role_id
  }
}
`;
export const deleterole = `mutation Deleterole($role_id: Int!) {
  deleterole(role_id: $role_id) {
    role_id
    name
  }
}
`;
export const createrole = `mutation Createrole($createroleInput: CreateroleInput!) {
  createrole(createroleInput: $createroleInput) {
    role_id
    name
  }
}
`;
export const updaterole = `mutation Updaterole($updateroleInput: UpdateroleInput!) {
  updaterole(updateroleInput: $updateroleInput) {
    role_id
    name
  }
}
`;
export const deleteuser = `mutation Deleteuser($user_id: Int!) {
  deleteuser(user_id: $user_id) {
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
export const createuser = `mutation Createuser($createuserInput: CreateuserInput!) {
  createuser(createuserInput: $createuserInput) {
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
export const updateuser = `mutation Updateuser($updateuserInput: UpdateuserInput!) {
  updateuser(updateuserInput: $updateuserInput) {
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
export const deleteweapon = `mutation Deleteweapon($weapon_id: Int!) {
  deleteweapon(weapon_id: $weapon_id) {
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
export const createweapon = `mutation Createweapon($createweaponInput: CreateweaponInput!) {
  createweapon(createweaponInput: $createweaponInput) {
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
export const updateweapon = `mutation Updateweapon($updateweaponInput: UpdateweaponInput!) {
  updateweapon(updateweaponInput: $updateweaponInput) {
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
