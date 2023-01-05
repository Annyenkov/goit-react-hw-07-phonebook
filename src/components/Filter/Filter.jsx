import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeValue } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import { Input, Label } from "./Filter.styled";

const Filter = () => {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filterValue} onChange={e => dispatch(changeValue(e.target.value))} />
    </Label>
  )
}

export default Filter