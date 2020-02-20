// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateaddress = `subscription OnCreateaddress {
  onCreateaddress {
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
export const onCreateaddressPerson = `subscription OnCreateaddressPerson {
  onCreateaddressPerson {
    address_person_id
    address_id
    person_id
  }
}
`;
export const onCreateagency = `subscription OnCreateagency {
  onCreateagency {
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
export const onCreatealias = `subscription OnCreatealias {
  onCreatealias {
    alias_id
    person_id
    name
    created_on
    created_by
  }
}
`;
export const onCreateballistic = `subscription OnCreateballistic {
  onCreateballistic {
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
export const onCreatecaliber = `subscription OnCreatecaliber {
  onCreatecaliber {
    caliber_id
    name
    description
  }
}
`;
export const onCreategang = `subscription OnCreategang {
  onCreategang {
    gang_id
    gang_name
    description
    person_id
    created_on
    created_by
  }
}
`;
export const onCreategangGroup = `subscription OnCreategangGroup {
  onCreategangGroup {
    group_id
    description
    gang_id
    created_on
    created_by
  }
}
`;
export const onCreateincident = `subscription OnCreateincident {
  onCreateincident {
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
export const onCreateincidentPerson = `subscription OnCreateincidentPerson {
  onCreateincidentPerson {
    person_id
    incident_id
    person_type
    arrested
    created_on
    created_by
  }
}
`;
export const onCreateperson = `subscription OnCreateperson {
  onCreateperson {
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
export const onCreatephoto = `subscription OnCreatephoto {
  onCreatephoto {
    photo_id
    file_name
    person_id
    incident_id
    created_on
    created_by
  }
}
`;
export const onCreaterelNib = `subscription OnCreaterelNib {
  onCreaterelNib {
    nib
    ballistic_id
    weapon_id
    person_id
  }
}
`;
export const onCreaterelUserRole = `subscription OnCreaterelUserRole {
  onCreaterelUserRole {
    user_id
    role_id
  }
}
`;
export const onCreaterole = `subscription OnCreaterole {
  onCreaterole {
    role_id
    name
  }
}
`;
export const onCreateuser = `subscription OnCreateuser {
  onCreateuser {
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
export const onCreateweapon = `subscription OnCreateweapon {
  onCreateweapon {
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
