import React from 'react';

export const OrgList = ({ employees }) => {
  return (
    <div>
      <h3>{`${employees.length} Employee(s)`}</h3>
      {employees.map(({ firstName, lastName, salary, bonus }) => (
        <div>{`${firstName} ${lastName} TC: ${salary + bonus}`}</div>
      ))}
    </div>
  );
};
