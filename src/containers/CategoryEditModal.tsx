import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 } from "uuid";
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Modal,
  InputNumber,
} from "antd";
import {
  setEditing,
  setEditingId,
  addCategory,
  updateCategory,
} from "../slices/category";
import { getCategories } from "../selectors";
import { CategoryType, CategoryItem } from "../types";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CategoryEditModal: React.FC = () => {
  const { editing, editingId, categories } = useSelector(getCategories);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const addingNew = editingId === "";
  const editingCategoryItem: CategoryItem = categories.find(
    (item) => item.id === editingId
  ) || {
    id: v4(),
    color: "#ffffff",
    name: "",
    categoryType: CategoryType.EXPENSE,
  };
  const _setEditing = (editing: boolean) => dispatch(setEditing(editing));
  const _setEditingId = (id: string) => dispatch(setEditingId(id));
  const _addCategory = (category: CategoryItem) =>
    dispatch(addCategory(category));
  const _updateCategory = (category: CategoryItem) =>
    dispatch(updateCategory(category));

  const handleModalOnCancel = () => {
    _setEditing(false);
    _setEditingId("");
  };

  const handleCategoryCreate = (category: CategoryItem) => {
    _addCategory(category);
  };

  const handleCategoryUpdate = (category: CategoryItem) => {
    _updateCategory(category);
  };

  const modalTitle = addingNew ? "New Category" : "Update Category";
  const modalOkText = addingNew ? "Create" : "Update";

  return (
    <React.Fragment>
      {editing ? (
        <Modal
          title={modalTitle}
          visible={true}
          okText={modalOkText}
          cancelText="Cancel"
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                handleModalOnCancel();
                if (addingNew) {
                  const newCategoryItem: CategoryItem = {
                    id: v4(),
                    ...values,
                  } as CategoryItem;
                  handleCategoryCreate(newCategoryItem);
                } else {
                  const updatedCategoryItem: CategoryItem = {
                    id: editingId,
                    ...values,
                  } as CategoryItem;
                  handleCategoryUpdate(updatedCategoryItem);
                }
              })
              .catch((info) => {
                console.log(info);
              });
          }}
          onCancel={() => {
            form.resetFields();
            handleModalOnCancel();
          }}
        >
          <Form
            form={form}
            initialValues={{ remember: true }}
            preserve={false}
            {...layout}
          >
            <Form.Item
              label="Category Type"
              name="categoryType"
              rules={[{ required: true }]}
              initialValue={editingCategoryItem.categoryType}
            >
              <Radio.Group buttonStyle="outline">
                <Radio.Button value={CategoryType.EXPENSE}>
                  EXPENSE
                </Radio.Button>
                <Radio.Button value={CategoryType.INCOME}>INCOME</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              initialValue={editingCategoryItem.name}
              rules={[{ required: true }]}
            >
              <Input placeholder="New Category..." />
            </Form.Item>

            <Form.Item
              label="Color Tag"
              name="color"
              initialValue={editingCategoryItem.color}
              rules={[{ required: true }]}
            >
              <input type="color" />
            </Form.Item>
          </Form>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default CategoryEditModal;
