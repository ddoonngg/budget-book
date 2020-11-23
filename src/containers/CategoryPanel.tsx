import React from "react";
import { Typography, Collapse, Row, Col, Button, Card } from "antd";
import ColorTag from "../components/ColorTag";
import { useSelector } from "react-redux";
import { getTransactions } from "../selectors";
import "./CategoryPanel.scss";
import { CategoryItem } from "../types";

const { Text } = Typography;
const { Panel } = Collapse;

interface CategoryPanel {
  categoryItem: CategoryItem;
}
const CategoryPanel: React.FC<CategoryPanel> = (props) => {
  const { categoryItem: categoryDataItem } = props;
  const { transactions, editing } = useSelector(getTransactions);
  let totalAmount = 0;
  transactions
    .filter((transaction) => transaction.category === categoryDataItem.id)
    .forEach((transaction) => {
      totalAmount += transaction.amount;
    });

  return (
    <Card
      size="small"
      title={
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ColorTag color={categoryDataItem.color} />
            <span>{categoryDataItem.name}</span>
          </div>
        </>
      }
    >
      <Text>${totalAmount}</Text>
    </Card>
  );
};

export default CategoryPanel;
