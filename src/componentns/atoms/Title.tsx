import { FC } from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const STitle = styled.div`
  border: 1px solid #000000;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  height: 100px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 60px;
`;

export const Title: FC<Props> = ({ text }) => {
  return <STitle>{text}</STitle>;
};
