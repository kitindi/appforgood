import React from "react";

const Members = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <p>{props.role ? props.role : "No role"}</p>
    </>
  );
};

export default Members;
