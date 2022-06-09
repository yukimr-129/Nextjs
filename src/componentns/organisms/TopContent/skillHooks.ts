import { ChangeEvent, useCallback, useState } from "react";

import { Skill } from "../../../pages/api/skill/[id]";

export const useSkill = () => {
  const [skill, setSkill] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill[]>([]);

  const changeSelectCategory = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const getSkills = async () => {
        const res = await fetch(`/api/skill/${e.target.value}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: Skill[] = await res.json();
        setSkill(data);
      };

      getSkills();
    },
    []
  );

  const onCkickToggleSkill = useCallback(
    (skillId: number) => {
      //   setSelect(skillId);
      // const categoryId = e.currentTarget.getAttribute("data-categoryid");
      const judge = selectedSkill.some((val) => {
        return val.id === skillId;
      });

      if (judge) {
        const deleteSelectedSkill = selectedSkill.filter((val) => {
          return val.id !== skillId;
        });
        setSelectedSkill([...deleteSelectedSkill]);
      } else {
        const addSelectedSkill = skill.find((val) => {
          return val.id === skillId;
        });
        if (addSelectedSkill) {
          setSelectedSkill([...selectedSkill, addSelectedSkill]);
        }
      }
    },
    [skill, selectedSkill]
  );

  const onCkickTagDelete = useCallback(
    (skillId: number) => {
      const deleteTagSkill = selectedSkill.filter((val) => {
        return val.id !== skillId;
      });
      setSelectedSkill([...deleteTagSkill]);
    },
    [selectedSkill]
  );

  return {
    skill,
    selectedSkill,
    changeSelectCategory,
    onCkickToggleSkill,
    onCkickTagDelete,
  };
};
