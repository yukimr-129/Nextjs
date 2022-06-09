import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
  count: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
  resetCount: () => void;
};

export const Counter: FC<Props> = memo(
  ({ count, handleDecrement, handleIncrement, resetCount }) => {
    return (
      <StCountWrapper>
        <StButton onClick={handleDecrement}> - </StButton>
        <div>{count}</div>
        <StButton onClick={handleIncrement}> + </StButton>
        <StButton onClick={resetCount}> × </StButton>
      </StCountWrapper>
    );
  }
);

const StCountWrapper = styled.div`
  padding: 8px 0;
  display: flex;
  width: 160px;
  justify-content: space-around;
`;

const StButton = styled.button`
  height: 32px;
  width: 32px;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
`;
