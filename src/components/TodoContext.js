import React, { useRef, useReducer, createContext, useContext } from 'react';
import produce from "immer";

const initialTodos = [
  {
    id: 1,
    text: 'css를 사용하기',
    done: true
  },
  {
    id: 2,
    text: 'Scss를 사용하기',
    done: true
  },
  {
    id: 3,
    text: 'StyleComponents를 사용하기',
    done: true
  },
  {
    id: 4,
    text: 'Emotion를 사용하기',
    done: false
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return produce(state, draft => {
        draft.push(action.todo)
      });
    case 'TOGGLE':
      return produce(state, draft => {
        const todo = draft.find(todos => todos.id === action.id);
        todo.done = !todo.done
      });
    case 'REMOVE':
      return produce(state, draft => {
        draft.splice(draft.findIndex(todo => todo.id !== action.id))
      });
    default:
      throw new Error(`Unhandled action ${action.type}`);
  }
}

//state전용 Context
const TodoStateContext = createContext();
//Dispatch전용 Context
const TodoDispatchContext = createContext();
//nextId Context
const TodoNextIdContext = createContext();

export const TodoProvider = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5); //렌더링 되지 않는값
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

//Custom Hooks State
export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
//Custom Hooks Dispatch
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

//Custom Hooks Dispatch
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
