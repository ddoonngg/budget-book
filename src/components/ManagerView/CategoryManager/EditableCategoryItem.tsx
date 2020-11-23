import React from "react";
import { CategoryItem } from "../../../types";
import { Row, Col, Button, Divider, Space } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import ColorTag from "../../ColorTag";
interface EditableCategoryItemProps {
  categoryItem: CategoryItem;
  active?: boolean;
  onEdit: (event: any, id: string) => void;
  onDelete: (event: any, id: string) => void;
  [key: string]: any;
}
const EditableCategoryItem: React.FC<EditableCategoryItemProps> = (props) => {
  const {
    categoryItem: categoryItemData,
    active = false,
    onEdit,
    onDelete,
    ...others
  } = props;

  return (
    <>
      <li {...others}>
        <Row justify="space-between" gutter={16} align="middle">
          <Col span={2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ColorTag color={categoryItemData.color} />
            </div>
          </Col>
          <Col span={18}>{categoryItemData.name}</Col>
          <Col>
            <Space size={6}>
              <div className="category-list__actions">
                <Button
                  type="link"
                  onClick={(event) => onEdit(event, categoryItemData.id)}
                  icon={<EditTwoTone style={{ fontSize: 14 }} />}
                ></Button>
                <Button
                  type="link"
                  onClick={(event) => onDelete(event, categoryItemData.id)}
                  icon={<DeleteTwoTone style={{ fontSize: 14 }} />}
                ></Button>
              </div>
            </Space>
          </Col>
        </Row>
      </li>
    </>
  );
};

export default EditableCategoryItem;
