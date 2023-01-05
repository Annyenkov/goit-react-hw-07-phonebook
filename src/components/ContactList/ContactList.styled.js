import styled from "styled-components";

export const Button = styled.button`
background-color: white;
border: 1px solid rgb(128, 128, 128, 0.5);
border-radius: 5px;
cursor: pointer;
:hover,
:focus {
  background-color: blue;
  color: white;
}
`

export const ListItem = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
width: 300px;

:not(:last-of-type) {
 margin-bottom : 5px;
}
`

export const Icon = styled.span`
width: 5px;
height: 5px;
background-color: black;
border-radius: 50%;
`