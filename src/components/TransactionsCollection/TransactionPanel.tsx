import React from "react";
import { Row, Col, Divider, Button, Space, Tooltip, Typography } from "antd";
import { CategoryType, TransactionItem } from "../../types";
import "./TransactionPanel.scss";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { getCategoryItemById } from "../../util/category";
import { getCategories } from "../../selectors";
import { useSelector } from "react-redux";
import { COLORS } from "../../constants";

interface TransactionPanelProps {
  heading: React.ReactNode;
  transactions: TransactionItem[];
  onDelete: (event: any, id: string) => void;
  onEdit: (event: any, id: string) => void;
  getDateView: (dateStr: string) => React.ReactNode;
}

const TransactionPanel: React.FC<TransactionPanelProps> = (props) => {
  const { heading, transactions, onDelete, onEdit, getDateView } = props;
  const { categories } = useSelector(getCategories);

  return (
    <>
      <Divider orientation="left">{heading}</Divider>
      <ul className="transaction-list">
        {transactions.map((transacs, i) => {
          const categoryItem = getCategoryItemById(
            transacs.category,
            categories
          );
          return (
            <Row
              className="transaction-list__item"
              key={i}
              gutter={[16, 8]}
              justify="space-between"
              align="middle"
            >
              <Col className="gutter-row" span={4}>
                <div>{getDateView(transacs.date)}</div>
              </Col>

              <Col className="gutter-row" span={4}>
                <div
                  style={{
                    color:
                      categoryItem?.categoryType === CategoryType.EXPENSE
                        ? COLORS.EXPENSE
                        : COLORS.INCOME,
                  }}
                >
                  {` ${
                    categoryItem?.categoryType === CategoryType.EXPENSE
                      ? "-"
                      : "+"
                  }$${transacs.amount}`}
                </div>
              </Col>

              <Col className="gutter-row" span={8}>
                <Row gutter={16}>
                  <Col className="gutter-row" span={24}>
                    <span style={{ fontWeight: 500 }}>
                      {categoryItem && categoryItem.name}
                    </span>
                  </Col>
                  <Col className="gutter-row" span={24}>
                    <span style={{ color: "gray" }}>{transacs.memo}</span>
                  </Col>
                </Row>
              </Col>

              <Col className="gutter-row transaction-list__actions">
                <Space size={6}>
                  <Tooltip placement="top" title="Edit">
                    <Button
                      color="green"
                      onClick={(event) => onEdit(event, transacs.id)}
                      type="link"
                      icon={<EditTwoTone style={{ fontSize: 14 }} />}
                    ></Button>
                  </Tooltip>
                  <Tooltip placement="top" title="Delete">
                    <Button
                      onClick={(event) => {
                        onDelete(event, transacs.id);
                      }}
                      type="link"
                      icon={<DeleteTwoTone style={{ fontSize: 14 }} />}
                    />
                  </Tooltip>
                </Space>
              </Col>
            </Row>
          );
        })}
      </ul>
    </>
  );
};

export default TransactionPanel;
