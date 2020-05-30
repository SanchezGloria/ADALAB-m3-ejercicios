import React, { useState } from 'react';
import MakeMeOlder from './MakeMeOlder';

function App() {
  const [age, setAge] = useState(20);
  const [present, setPresent] = useState(0);
  const handleNewAge = () => {
    setAge(age + 1);
    console.log(age);
  };
  const handleNewPresent = () => {
    setPresent(present + 1);
    console.log(present);
  };
  return (
    <div className="App">
      <MakeMeOlder getNewAge={handleNewAge} number={age} getNewPresent={handleNewPresent} present={present} />
    </div>
  );
}

export default App;
