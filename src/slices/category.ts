import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryState, CategoryItem } from "../types";

export const initialState: CategoryState = {
  categories: [],
  loading: true,
  editing: false,
  editingId: "",
  error: "category error",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory: (state, { payload }: PayloadAction<CategoryItem>) => {
      state.categories.push(payload);
    },
    loadCategories: (state) => {
      state.loading = true;
    },
    loadCategoriesError: (state, { payload }: PayloadAction<string>) => {
      state.loading = false;
      state.error = payload;
    },
    loadCategoriesSuccess: (
      state,
      { payload }: PayloadAction<CategoryItem[]>
    ) => {
      state.categories = payload;
      state.loading = false;
    },
    setEditing: (state, { payload }: PayloadAction<boolean>) => {
      state.editing = payload;
    },
    setEditingId: (state, { payload }: PayloadAction<string>) => {
      state.editingId = payload;
    },
    updateCategory: (state, { payload }: PayloadAction<CategoryItem>) => {
      state.categories = state.categories.map((category) =>
        category.id === payload.id ? { ...category, ...payload } : category
      );
    },
    deleteCategory: (state, { payload }: PayloadAction<string>) => {
      state.categories = state.categories.filter(
        (category) => category.id !== payload
      );
    },
  },
});

export const {
  addCategory,
  loadCategories,
  loadCategoriesError,
  loadCategoriesSuccess,
  setEditing,
  setEditingId,
  updateCategory,
  deleteCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
