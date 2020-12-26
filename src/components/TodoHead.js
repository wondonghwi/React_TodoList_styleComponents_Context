import React from 'react';
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #5c7cfa;
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
  }
`;


const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1>2020년 12월 27일</h1>
      <div className='day'>일요일</div>
      <div className='tasks-left'>할 일 2개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
