import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  done: boolean;
  text: string;
}

interface TodoSliceState {
  todos: Todo[];
}

const initialState: TodoSliceState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.payload,
          done: false,
        },
      ];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todosSlice.actions;

const store = configureStore({
  // now add reducer for the todoSlice
  // to our list of globally registered reducers
  reducer: {
    todos: todosSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectTodos = (state: RootState) => state.todos.todos;

export default store;
