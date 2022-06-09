import { useCallback, useEffect, useState } from "react";

import { TagList } from "../componentns/molecules/TagArea";

export const useTag = () => {
  const [tag, setTag] = useState<string[]>([]);
  const [tagList, setTagList] = useState<TagList>([]);

  const handleClearTag = useCallback(() => {
    setTag([]);
  }, []);

  const handlePushTag = useCallback(
    (val: string) => {
      // let newtag;
      if (tag.includes(val)) {
        const newtag = tag.filter((t) => {
          return t !== val;
        });
        setTag([...newtag]);
      } else {
        //   newtag = tag.concat(val);
        setTag([...tag, val]);
      }
    },
    [tag]
  );

  useEffect(() => {
    const getTag = async () => {
      const res = await fetch("/api/tag");
      const data: TagList = (await res.json()) as TagList;

      setTagList(data);
    };

    getTag();
    // console.log(tag);
  }, [tag]);

  return { tag, tagList, handleClearTag, handlePushTag };
};
