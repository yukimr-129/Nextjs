import { ChangeEvent, useCallback, useState } from "react";

import { Skill } from "../pages/api/skill/[id]";

export const useSkill = () => {
  const [skill, setSkill] = useState<Skill[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<Skill[]>([]);

  const changeSelectCategory = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (Number(e.target.value) === 0) {
        setSkill([]);
        return;
      }
      const getSkills = async () => {
        const res = await fetch(`/api/skill/${e.target.value}`);
        const data = (await res.json()) as Skill[];
        setSkill(data);
      };

      getSkills();
    },
    []
  );

  const onCkickToggleSkill = useCallback(
    (skillId: number) => {
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
