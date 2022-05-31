import React from 'react';

import './Person.css';

function Person(props) {
  return (
    <div className='person'>
      <h2 className="title">{props.name}</h2>
      <p className="age">Age <span>{props.age}</span></p>
    </div>
  )
}

export default Person
