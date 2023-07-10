import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 8px 28px;
  margin-left: 10px;
  margin-right: 25px;
`;
const TaskName = styled.p`
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;
//! ^ reminder - possible alt solution here
//TODO: can use TaskChecked and TaskNotChecked as their own styled components (one is visible and then one is not*)

function Task(props) {
  return (
    <Container>
      <TaskName checked={props.isChecked}>{props.taskDescription}</TaskName>

      <input
        checked={props.isChecked}
        type="checkbox"
        name={props.index}
        onChange={props.onChange}
      />

      <DeleteButton name={props.index} onClick={props.deleteTask} >Delete</DeleteButton>
    </Container>
  );
}

export default Task;
