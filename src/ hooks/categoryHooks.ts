import { useEffect, useState } from "react";

import { Category } from "../pages/api/category";

export const useCategory = () => {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch("/api/category");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: Category[] = await res.json();

      setCategory(data);
    };

    getCategory();
  }, []);

  return { category };
};
