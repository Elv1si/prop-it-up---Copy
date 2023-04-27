import React, { useState } from "react";

const PersonCard = (props) => {
  const { obj } = props;
  const [stateAge, setStateAge] = useState(obj.age);
  return (
    <div>
      <h2>
        {obj.lastName}, {obj.firstName}
      </h2>
      <p>Age: {stateAge}</p>
      <p>Hair Color: {obj.airColor}</p>
      <button onClick={() => setStateAge(stateAge + 1)}>
        Birthday Button for {obj.firstName} {obj.lastName}
      </button>
      <Person pob={}/>

    </div>

  );
};

export default PersonCard;