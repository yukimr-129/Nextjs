import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";

import { useCategory } from "../../../ hooks/categoryHooks";
import { useCount } from "../../../ hooks/hooks";
import { useSkill } from "../../../ hooks/skillHooks";
import { useTag } from "../../../ hooks/tagHooks";
import { Counter } from "../../molecules/Counter";
import { TagArea } from "../../molecules/TagArea";
import { Tech } from "../../molecules/Tech";

export const TopContent: FC = () => {
  const router = useRouter();

  const { count, handleIncrement, handleDecrement, resetCount } = useCount();
  const { tag, tagList, handleClearTag, handlePushTag } = useTag();
  const { category } = useCategory();
  const {
    skill,
    selectedSkill,
    changeSelectCategory,
    onCkickToggleSkill,
    onCkickTagDelete,
  } = useSkill();

  return (
    <StRoot>
      <StTitle>
        <h1>react初心者向け講座</h1>
      </StTitle>
      <StButton
        onClick={() => {
          router.push("/search");
        }}
      >
        検索画面へ
      </StButton>
      <StContent>
        <StArticle>
          <StArticleTitle>カウント</StArticleTitle>
          <Counter
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            resetCount={resetCount}
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>タグ</StArticleTitle>
          <TagArea
            tag={tag}
            tagList={tagList}
            handleClearTag={handleClearTag}
            handlePushTag={handlePushTag}
          />
        </StArticle>
        <StArticle>
          <StArticleTitle>興味のある言語/フレームワーク</StArticleTitle>
          <Tech
            category={category}
            skill={skill}
            selectedSkill={selectedSkill}
            changeSelectCategory={changeSelectCategory}
            onCkickToggleSkill={onCkickToggleSkill}
            onCkickTagDelete={onCkickTagDelete}
          />
        </StArticle>
      </StContent>
    </StRoot>
  );
};

const StButton = styled.button`
  margin: 16px;
  border-radius: 3px;
  background-color: rgb(27, 161, 255);
  color: #fff;
  padding: 8px;
`;

const StRoot = styled.div`
  background-color: rgb(244, 244, 244);
  padding: 20px;
  width: auto;
  height: auto;
`;

const StTitle = styled.div`
  border: 1px solid #000000;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  height: 100px;
  font-size: 2rem;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 16px;
`;

const StContent = styled.div`
  padding: 16px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(102, 102, 102);
  border-radius: 3px;
`;

const StArticle = styled.article`
  margin-bottom: 16px;
`;

const StArticleTitle = styled.h2`
  margin-bottom: 16px;
`;
