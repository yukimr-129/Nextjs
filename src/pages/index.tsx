import type { NextPage } from "next";

// import { Body } from "../componentns/organisms/Body";
import { TopContent } from "../componentns/organisms/TopContent";
import { Template } from "../componentns/templates";

const Home: NextPage = () => {
  return (
    <Template title="タイトル">
      {/* <Body /> */}
      <TopContent />
    </Template>
  );
};

export default Home;
