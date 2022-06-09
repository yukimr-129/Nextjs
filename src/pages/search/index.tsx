import { NextPage } from "next";
import Link from "next/link";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import styled from "styled-components";

import { Search } from "../../componentns/organisms/search";
import { Template } from "../../componentns/templates";
import { Category } from "../api/category";

// Contextの型
export type SearchConditionType = {
  displayCategoryList: Category[];
};

export type DispatchSearchConditionType = Dispatch<Action>;

// 参照系
const defaultState: SearchConditionType = {
  displayCategoryList: [],
};

const SerchConditionContext = createContext<SearchConditionType>(defaultState);
export const useSerchCondition = () => useContext(SerchConditionContext);

// 更新系
const defaultSetValue: DispatchSearchConditionType = () => {};
const DispatchSerchConditionContext =
  createContext<DispatchSearchConditionType>(defaultSetValue);

export const useDispatchSearchCondition = () =>
  useContext(DispatchSerchConditionContext);

type Props = {
  initialState?: SearchConditionType;
  children: ReactNode;
};

// Action
type Action =
  | { type: "UPDATE_CATEGORY_LIST"; categoryItem: Category }
  | { type: "RESET_CATEGORY_LIST" };

// Reducer関数
const reducer = (state: SearchConditionType, action: Action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY_LIST": {
      if (
        state.displayCategoryList.some((cl) => cl.id === action.categoryItem.id)
      ) {
        const tempCategory = state.displayCategoryList.filter(
          (cl) => cl.id !== action.categoryItem.id
        );
        return { ...state, displayCategoryList: tempCategory };
      }
      const tempCategory = [...state.displayCategoryList, action.categoryItem];
      return { ...state, displayCategoryList: tempCategory };
    }
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

// カスタムプロバイダー
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
  console.log(0 ?? "実行");

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
