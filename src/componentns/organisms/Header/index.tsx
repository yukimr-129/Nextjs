import { FC } from "react";
import styled from "styled-components";

import { Text } from "../../atoms/Text";

export const Header: FC = () => {
  return (
    <StHeaderRoot>
      <Text>skyticket</Text>
    </StHeaderRoot>
  );
};

const StHeaderRoot = styled.header`
  background-color: rgb(27, 161, 255);
  color: rgb(255, 255, 255);
  width: 100%;
  height: 50px;
  font-size: 15px;
`;
