import React from "react";
import { styled } from "styled-components";

//can import the function itself instead of the export at bottom of page*
export default function AddButton(props) {
  return <BlueButton onClick={props.addingTask}>Add</BlueButton>;
}

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
  padding: 8px 28px;
  margin-top: 5px;
`;
