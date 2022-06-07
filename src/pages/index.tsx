import type { NextPage } from "next";

import { Body } from "../componentns/organisms/Body";
import { Template } from "../componentns/templates";

const Home: NextPage = () => {
  return (
    <Template title="タイトル">
      <Body />
    </Template>
  );
};

export default Home;
