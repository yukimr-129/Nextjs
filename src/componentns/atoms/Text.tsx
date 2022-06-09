import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
  children: string;
};
const SText = styled.p`
  padding: 10px;
  font-size: 20px;
`;

export const Text: FC<Props> = memo(({ children }) => {
  return <SText>{children}</SText>;
});
