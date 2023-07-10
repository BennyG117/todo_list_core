import React, { useState } from "react";
import { styled } from "styled-components";
import AddButton from "../components/AddButton";
import Task from "../components/Task";
import UserInput from "../components/UserInput";

export default function Home() {
  const [inputText, setInputText] = useState("");

  const [taskData, setTaskData] = useState([
    //! testing demo:
    //     {
    //       taskDescription: "Get Python black belt",
    //       isChecked: false,
    //     },
    // {
    //   taskDescription: "fizz",
    //   isChecked: false,
    // },
  ]);

  //! STRIKE-THROUGH TEXT
  //could have used a map, but chose to breakdown
  const toggleChecked = (event) => {
    //the index this is our array location in our taskData list
    const index = event.target.name;
    // using spread to make a copy of everything from taskData to a new mutable array
    const taskDataCopy = [...taskData];
    //taskCopy is a copy of the specifc task at that index
    const taskCopy = taskData[index];
    //assigning the opposite value to isChecked to that index location
    taskCopy.isChecked = !taskData[index].isChecked;
    //assigning the whole new object to the index location
    taskDataCopy[index] = taskCopy;

    //testing with log
    console.log(taskDataCopy);
    setTaskData(taskDataCopy);
  };

  //!DELETE FUNCTION
  const deleteTask = (event) => {
    const eventIndex = event.target.name;
    //using filter to delete - delete what matches*
    const newTaskData = taskData.filter(
      (task, index) => index.toString() !== eventIndex
    );
    setTaskData(newTaskData);
  };

  //!ADD TASK
  const addTask = () => {
    console.log("Add Task");
    //using spread to enable delete*
    //if input text is empty then return nothing - don't add blank todos!
    if (inputText === "") {
      return;
    }
    setTaskData([
      ...taskData,
      { taskDescription: inputText, isChecked: false },
    ]);
    //resets input field so it doesn't stay filled*
    setInputText("");
  };

  return (
    <Container>
      <h2>Add a Task!</h2>
      <section>
        <UserInput
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
      </section>
      <section>
        <AddButton addingTask={addTask}/>
      </section>
      <section>
        {taskData.map((taskObject, indexNumber) => {
          return (
            <Task
              key={`task-${indexNumber}`}
              taskDescription={taskObject.taskDescription}
              isChecked={taskObject.isChecked}
              index={indexNumber}
              deleteTask={deleteTask}
              onChange={toggleChecked}
            />
          );
        })}
      </section>
    </Container>
  );
}

//!styled goes outside of the component and at the end of everything!
const Container = styled.div`
padding: 1rem;
`