import { ChangeEvent, FC, memo, useCallback } from "react";
import styled from "styled-components";

import { Category } from "../../../pages/api/category";
import { Skill } from "../../../pages/api/skill/[id]";

type Props = {
  category: Category[];
  skill: Skill[];
  selectedSkill: Skill[];
  changeSelectCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
  onCkickToggleSkill: (skillId: number) => void;
  onCkickTagDelete: (skillId: number) => void;
};

export const Tech: FC<Props> = memo(
  ({
    category,
    skill,
    selectedSkill,
    changeSelectCategory,
    onCkickToggleSkill,
    onCkickTagDelete,
  }) => {
    const selectColor = useCallback(
      (id: number) => {
        let color;
        switch (id) {
          case 1:
            color = "red";
            break;
          case 2:
            color = "blue";
            break;
          case 3:
            color = "green";
            break;
          case 4:
            color = "#ff8c00";
            break;
          default:
            break;
        }
        return color;
      },
      [selectedSkill]
    );
    return (
      <StWrapper>
        <StSelectedTagAreaWrapper>
          <StTechSelecteBox
            name="category"
            onChange={(e) => changeSelectCategory(e)}
          >
            {category.map((val) => (
              <option key={val.id} value={val.id}>
                {val.value}
              </option>
            ))}
          </StTechSelecteBox>
          <StSkillsArea>
            <StSkillsList>
              {skill.map((val) => (
                <StSkillsItem
                  key={val.id}
                  onClick={() => onCkickToggleSkill(val.id)}
                >
                  {val.value}
                </StSkillsItem>
              ))}
            </StSkillsList>
          </StSkillsArea>
        </StSelectedTagAreaWrapper>
        <StTechSelectedWrapper>
          <StSelectArea>
            <StSelectedList>
              {selectedSkill.map((val) => (
                <StSelectedItem key={val.id}>
                  <StSelectedInner color={selectColor(val.categoryId)}>
                    {val.value}
                    <StSelectedDeleteButton
                      onClick={() => onCkickTagDelete(val.id)}
                    >
                      ×
                    </StSelectedDeleteButton>
                  </StSelectedInner>
                </StSelectedItem>
              ))}
            </StSelectedList>
          </StSelectArea>
        </StTechSelectedWrapper>
      </StWrapper>
    );
  }
);

const StWrapper = styled.div`
  display: flex;
`;

const StSelectedTagAreaWrapper = styled.div``;

const StTechSelecteBox = styled.select`
  margin-bottom: 20px;
  width: 200px;
`;

const StSkillsArea = styled.div`
  width: 100%;
`;
const StSkillsList = styled.ul`
  height: 100%;
`;
const StSkillsItem = styled.li`
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const StTechSelectedWrapper = styled.div`
  margin-top: 16px;
  margin-left: 20px;
  padding: 0 8px;
`;
const StSelectArea = styled.ul``;
const StSelectedList = styled.ul`
  display: flex;
`;

const StSelectedItem = styled.li`
  margin-right: 8px;
`;
const StSelectedInner = styled.span`
  background-color: ${(props) => props.color};
  padding: 7px 10px;
  font-size: 13px;
  border-radius: 999px;
  color: #fff;
  letter-spacing: 2px;
`;

const StSelectedDeleteButton = styled.button`
  padding-left: 5px;
  color: #fff;
  cursor: pointer;
`;
