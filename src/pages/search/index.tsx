import { NextPage } from "next";
import Link from "next/link";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import styled from "styled-components";

import { AAA, Search } from "../../componentns/organisms/search";
import { Template } from "../../componentns/templates";
import { Category } from "../api/category";

export type SearchConditionType = {
  displayCategoryList: Category[];
};

export type DispatchSearchConditionType = Dispatch<Action>;

const defaultState: SearchConditionType = {
  displayCategoryList: [],
};

const defaultSetValue: DispatchSearchConditionType = () => {};

// export type SearchConditionType = {
//   displayCategoryList: Category[];
// };

// const defaultValue: SearchConditionType = {
//   displayCategoryList: [],
// };

// export type DispatchSearchConditionType = {
//   handleCategoryList: (category: Category) => void;
// };

// const dispatchDefaultValue: DispatchSearchConditionType = {
//   handleCategoryList: () => {},
// };

const SerchConditionContext = createContext<SearchConditionType>(defaultState);
const DispatchSerchConditionContext =
  createContext<DispatchSearchConditionType>(defaultSetValue);

export const useSerchCondition = () => useContext(SerchConditionContext);
export const useDispatchSearchCondition = () =>
  useContext(DispatchSerchConditionContext);

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  initialState?: SearchConditionType;
  children: ReactNode;
};

type Action =
  | { type: "UPDATE_CATEGORY_LIST"; category: Category }
  | { type: "RESET_CATEGORY_LIST" };

const reducer = (state: SearchConditionType, action: Action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY_LIST":
      if (
        state.displayCategoryList.some((cl) => cl.id === action.category.id)
      ) {
        const tempCategory = state.displayCategoryList.filter(
          (cl) => cl.id !== action.category.id
        );
        return { ...state, displayCategoryList: tempCategory };
      }
      // eslint-disable-next-line no-case-declarations
      const tempCategory = [...state.displayCategoryList, action.category];
      return { ...state, displayCategoryList: tempCategory };

    case "RESET_CATEGORY_LIST":
      return { ...state, displayCategoryList: [] };
    default:
      return state;
  }
};

const useSearchCore = (initialState?: SearchConditionType) => {
  const [state, dispatch] = useReducer(reducer, initialState ?? defaultState);
  return { state, dispatch };
};

const SearchConditionProvider: FC<Props> = ({ initialState, children }) => {
  const { state, dispatch } = useSearchCore(initialState);
  return (
    <SerchConditionContext.Provider value={state}>
      <DispatchSerchConditionContext.Provider value={dispatch}>
        {children}
      </DispatchSerchConditionContext.Provider>
    </SerchConditionContext.Provider>
  );
};

const TestPage: NextPage = () => {
  return (
    <SearchConditionProvider>
      <Template title="検索">
        <Search />
        <Link href="/">
          <StLink>前の画面に戻る</StLink>
        </Link>
      </Template>
    </SearchConditionProvider>
  );
};

export default TestPage;

const StLink = styled.a`
  color: rgb(27, 161, 255);
`;
