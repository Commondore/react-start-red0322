import React from 'react';

import './Person.css';

function Person(props) { /// {name: '', age: 30, increase}
  return (
    <div className="person">
      <h2 className="title" onClick={props.increase}>{props.name}</h2>
      <input type="text" value={props.name} className="change__name" onChange={props.change} />
      <p className="age">
        Age <span>{props.age}</span>
      </p>
      <p>Hobby: {props.children}</p>
    </div>
  );
}

export default Person
