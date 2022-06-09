import { FC, memo, ReactNode } from "react";
import styled from "styled-components";

import { useCategory } from "../../../ hooks/categoryHooks";
import { Category } from "../../../pages/api/category";
import {
  useDispatchSearchCondition,
  useSerchCondition,
} from "../../../pages/search";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
type PropsAAA = {
  children: ReactNode;
};
export const Search: FC<Props> = () => {
  return (
    <>
      <StWrapper>
        <StBox>
          <h2>選択カテゴリ↓</h2>
          <CategoryList />
        </StBox>
        <StBox>
          <h2>My Select</h2>
          <DisplayCategoryList />
        </StBox>
      </StWrapper>
      <AAA />
    </>
  );
};

export const CategoryList: FC<Props> = () => {
  const { category } = useCategory();

  const dispatch = useDispatchSearchCondition();
  console.log("List");
  // eslint-disable-next-line no-shadow
  const handleCLick = (category: Category) => {
    dispatch({ type: "UPDATE_CATEGORY_LIST", category });
  };
  return (
    <ul>
      {category.map((c) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li key={`categoryList${c.id}`} onClick={() => handleCLick(c)}>
          {c.value}
        </li>
      ))}
    </ul>
  );
};

const DisplayCategoryList: FC = () => {
  const { displayCategoryList } = useSerchCondition();
  console.log("display");
  return (
    <StList>
      {displayCategoryList.map((c) => (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li key={`categoryList${c.id}`}>{c.value}</li>
      ))}
    </StList>
  );
};

export const AAA = () => {
  console.log("aaaa");
  const dispatch = useDispatchSearchCondition();
  const handleClick = () => {
    dispatch({ type: "RESET_CATEGORY_LIST" });
  };
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  return <div onClick={handleClick}>aaaaaa</div>;
};

const StBox = styled.div`
  width: 600px;
  border: 1px solid #000;
`;
const StList = styled.ul``;
const StWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
