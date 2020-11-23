import { CategoryItem, CategoryType } from "../types";

export function getCategoryItemById(
  id: string,
  categories: CategoryItem[]
): CategoryItem | undefined {
  return categories.find((cate) => cate.id === id);
}
