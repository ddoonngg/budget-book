import React from "react";

//==============================================================================
// Items
//==============================================================================

export enum CategoryType {
  INCOME = "INCOME",
  EXPENSE = "EXPENSE",
}

export interface TransactionItem {
  id: string;
  memo: string;
  amount: number;
  date: string;
  // category-id
  category: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  categoryType: CategoryType;
  color: string;
}

export interface TransactionState {
  transactions: TransactionItem[];
  loading: boolean;
  error?: string;
  editing: boolean;
  editingId: string;
}
export interface CategoryState {
  categories: CategoryItem[];
  error: string;
  loading: boolean;
  editing: boolean;
  editingId: string;
}

export interface SettingsState {
  isOpen: boolean;
  previewMarkdown: boolean;
  loading: boolean;
  darkTheme: boolean;
  sidebarVisible: boolean;
}

export interface SyncState {
  syncing: boolean;
  lastSynced: string;
  error: string;
  pendingSync: boolean;
}

export interface RootState {
  categoryState: CategoryState;
  transactionState: TransactionState;
  // settingsState: SettingsState;
  // syncState: SyncState;
}

//==============================================================================
// API
//==============================================================================

export interface SyncPayload {
  categories: CategoryItem[];
  transactions: TransactionItem[];
}

//==============================================================================
// Events
//==============================================================================

export type ReactDragEvent = React.DragEvent<HTMLDivElement>;

export type ReactMouseEvent =
  | MouseEvent
  | React.MouseEvent<HTMLDivElement>
  | React.ChangeEvent<HTMLSelectElement>;

export type ReactSubmitEvent =
  | React.FormEvent<HTMLFormElement>
  | React.FocusEvent<HTMLInputElement>;

//==============================================================================
// Default Types
//==============================================================================

// Taken from TypeScript private declared type within Actions
export type WithPayload<P, T> = T & {
  payload: P;
};
