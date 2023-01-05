import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
border: 1px solid black;
width: 300px;
height: 150px;
`
export const Label = styled.label`
display: flex;
margin-left: 5px;
flex-direction: column;
`

export const Input = styled.input`
width: 150px;
margin-top: 5px;
border: 1px solid rgb(128, 128, 128, 0.5); 
`

export const Button = styled.button`
width: 100px;
margin-left: 5px;
background-color: white;
border-radius: 5px;
border: 1px solid rgb(128, 128, 128, 0.5);
cursor: pointer;
:hover,
:focus {
  background-color: blue;
  color: white;
}
`