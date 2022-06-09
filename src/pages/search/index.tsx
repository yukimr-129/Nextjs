import { NextPage } from "next";
import Link from "next/link";

import { Template } from "../../componentns/templates";

const SearchPage: NextPage = () => {
  return (
    <Template title="タイトル">
      <div>
        <Link href="/">
          <span
            style={{
              cursor: "pointer",
              padding: "20px",
              display: "block",
              textAlign: "center",
            }}
          >
            前の画面に戻る
          </span>
        </Link>
      </div>
    </Template>
  );
};

export default SearchPage;
