import { FC } from "react";
import styled from "styled-components";

import { Text } from "../../atoms/Text";

export const Footer: FC = () => {
  return (
    <StFooterRoot>
      <Text>skyticket</Text>
    </StFooterRoot>
  );
};

const StFooterRoot = styled.footer`
  background-color: #000000;
  color: rgb(255, 255, 255);
  width: 100%;
  height: 50px;
`;
