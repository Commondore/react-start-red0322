import "./App.css";
import Person from "./components/Person/Person";

import { useState } from "react";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import Counter from "./components/Counter/Counter";

function App() {
  const [people, setPeople] = useState([
    /// [[], fn]
    { name: "Mike", age: 30, hobby: "Football", id: 1 },
    { name: "John", age: 20, hobby: "Basketball", id: 2 },
    { name: "Sam", age: 40, hobby: "Running", id: 3 },
  ]);

  const [isShow, setIsShow] = useState(false);

  const changeName = (event, index) => {
    let copyPeople = [...people];
    const person = { ...people[index] };
    person.name = event.target.value;
    copyPeople[index] = person;

    setPeople(copyPeople);
  };

  const increaseAge = (index) => {
    const copyPeople = [...people];
    const person = { ...people[index] };
    person.age++;
    copyPeople[index] = person;

    setPeople(copyPeople);
  };

  const toggle = () => {
    setIsShow((show) => !show);
  };

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className="wrapper">

      <ToggleButton isShow={isShow} toggle={toggle}>
        Переключатель
      </ToggleButton>

      <Counter data={people}>Количество людей</Counter>

      {isShow ? (
        <div className="App">
          {people.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                change={(event) => changeName(event, index)}
                increase={() => increaseAge(index)}
                remove={() => removePerson(person.id)}
              >
                {person.hobby}
              </Person>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default App;
