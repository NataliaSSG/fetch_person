import React from 'react';
import { PeopleResponse } from '../types/http/people.response';

interface PersonCardProps {
  person: PeopleResponse['results'][0];
}

const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const { name, location, dob, phone } = person;
  const fullName = `${name.first} ${name.last}`;
  const address = `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`;
  const birthday = new Date(dob.date).toLocaleDateString();

  return (
    <div className="person-card">
      <h2>{fullName}</h2>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Birthday:</strong> {birthday}</p>
    </div>
  );
};

export default PersonCard;