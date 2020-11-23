import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../selectors";
import { addCategory, loadCategories } from "../slices/category";
import { CategoryItem } from "../types";
import { Button, Row, Col } from "antd";
import { getInputClassName } from "antd/lib/input/Input";
import CategoryPanel from "./CategoryPanel";
const CategorySummary: React.FC = () => {
  const { categories } = useSelector(getCategories);
  const dispatch = useDispatch();
  const _loadCategories = () => dispatch(loadCategories());
  React.useEffect(() => {
    _loadCategories();
  }, []);

  return (
    <div>
      <div className="cate-collections">
        <Row gutter={[16, 16]}>
          {categories.map((categoryItem) => {
            return (
              <Col key={categoryItem.id} className="gutter-row" span={24}>
                <CategoryPanel categoryItem={categoryItem} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default CategorySummary;
