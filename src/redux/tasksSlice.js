import { createSlice } from "@reduxjs/toolkit";
import { initialContacts } from "data/initialContacts";
import { nanoid } from "nanoid";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialContacts,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
  },
  },
}) 

export const { addTask, deleteTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;