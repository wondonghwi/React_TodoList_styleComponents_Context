import React, { useState } from 'react';
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/all";

const CircleButton = styled.button`
  border: none;
  outline: none;
  background: #5c7cfa;

  &:hover {
    background: #91a7ff;
  }

  &:active {
    background: #3b5bdb;
  }

  z-index: 1;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: #fff;
  border-radius: 50%;

  transition: 300ms all ease-in;
  ${props => props.open && css`
    background: #ff6b6b;

    &:hover {
      background: #ff8787;
    }

    &:active {
      background: #fa5252;
    }

    transform: translate(-50%, 50%) rotate(45deg);
  `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder='할 일을 입력 후, Enter를 눌러주세요.' autoFocus/>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd/>
      </CircleButton>
    </>
  );
};

export default TodoCreate;
