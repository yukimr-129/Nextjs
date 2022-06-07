import { FC } from "react";
import styled from "styled-components";

import { Title } from "../../atoms/Title";

const SBody = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 20px;
  width: auto;
  height: 100vh;
`;

export const Body: FC = () => {
  return (
    <SBody>
      <Title text="React初心者向け講座" />
    </SBody>
  );
};
