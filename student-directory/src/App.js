import React from "react";

const User = props => {
  let cats = ["Luna", "Wynter", "Link"]
  return(
  <div className="mentor-container">
    <h1>Cats:</h1>
    <ul>
      {cats.map((cat, index) =>(
        <li key={ index }>{ cat }</li>
      ))}
    </ul>
  </div>
)};

export default User;

// Use the code from `Mentor` above to create a new functional, stateless component called `User` with a list of friends. Hard code the list of friends, do not use state or props.