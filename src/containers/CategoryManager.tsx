import React, { useState } from "react";
import { Button, Modal, message, Divider } from "antd";
import { CategoryType } from "../types";
import { PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../selectors";
import { CategoryItem } from "../types";
import "./CategoryManager.scss";
import {
  addCategory,
  loadCategories,
  setEditing,
  deleteCategory,
} from "../slices/category";
import EditableCategoryItem from "../components/ManagerView/CategoryManager/EditableCategoryItem";
import CategoryEditModal from "./CategoryEditModal";
import { setEditingId } from "../slices/category";
import { rejects } from "assert";
const { confirm } = Modal;

const CategoryManager = () => {
  const [modal, contextHolder] = Modal.useModal();

  const { categories, editing, editingId } = useSelector(getCategories);

  const dispatch = useDispatch();
  const _loadCategories = () => dispatch(loadCategories());
  const _setEditing = (editing: boolean) => dispatch(setEditing(editing));
  const _setEditingId = (id: string) => dispatch(setEditingId(id));
  const _deleteCategory = (id: string) => dispatch(deleteCategory(id));
  const _addCategory = (categoryItem: CategoryItem) =>
    dispatch(addCategory(categoryItem));

  React.useEffect(() => {
    _loadCategories();
    return () => {};
  }, []);

  const handleCategoryOnSave = (event: any, id: string) => {
    _setEditing(true);
    _setEditingId(id);
  };
  const handleCategoryDelete = (event: any, id: string) => {
    _setEditing(false);
    _setEditingId("");
    _deleteCategory(id);
    success();
  };

  const handleOnClick = (event: any) => {
    _setEditing(true);
    _setEditingId("");
  };

  const success = () => {
    message.success("Successful deleted");
  };

  function showCategoryDeleteConfirm(event: any, id: string) {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleCategoryDelete(event, id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  return (
    <div>
      <Divider></Divider>
      <ul className="category-list" style={{ listStyle: "none" }}>
        {categories.map((cate) => (
          <EditableCategoryItem
            key={cate.id}
            categoryItem={cate}
            onEdit={(event, id) => {
              handleCategoryOnSave(event, id);
            }}
            onDelete={(event, id) => {
              showCategoryDeleteConfirm(event, id);
            }}
            className="category-list__item"
          />
        ))}
      </ul>
      <div>
        <Button type="default" icon={<PlusOutlined />} onClick={handleOnClick}>
          New Category
        </Button>
      </div>
      {editing ? <CategoryEditModal /> : null}
      <Divider></Divider>
    </div>
  );
};

export default CategoryManager;
