import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "./TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; //scroll
`;

const TodoList = () => {
  const state = useTodoState();
  return (
    <TodoListBlock>
      <TodoItem text='css를 사용하기' done={true}/>
      <TodoItem text='Scss를 사용하기' done={true}/>
      <TodoItem text='StyleComponents를 사용하기' done={true}/>
      <TodoItem text='emotion를 사용하기' done={false}/>
    </TodoListBlock>
  );
};

export default TodoList;

