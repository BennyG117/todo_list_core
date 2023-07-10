import React from 'react'
import { styled } from "styled-components";

export default function UserInput(props) {
  return (
    <InputField type={props.type} value={props.value} onChange={props.onChange} placeholder="type here"/>
  )
}

const InputField = styled.input`
  background-color: lightgray;
  color: black;
  border: none;
  max-width: 100px;
  border-radius: 5px;
  padding: 8px 28px;
`