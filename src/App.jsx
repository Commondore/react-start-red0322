import './App.css';
import Person from './components/Person/Person';

import { useState } from 'react';

function App() {

  const [people, setPeople] = useState([ /// [[], fn]
    {name: "Mike", age: 30},
    {name: "John", age: 20},
  ]);

  const changeName = () => {
    let copyPeople = [...people];
    const person = {...people[0]};
    person.name = "Sam";
    copyPeople[0] = person;

    setPeople(copyPeople);
  };

  return (
    <div className='wrapper'>
      <button className="btn" onClick={changeName}>Change name</button>
      <div className="App">
        <Person name={people[0].name} age={people[0].age} />
        <Person name={people[1].name} age={people[1].age} />
      </div>
    </div>
  );
}

export default App;
