import React from "react";
import { Typography, Row, Col } from "antd";

const { Text } = Typography;

interface SummaryBoardProps {
  thisMonthExpense?: number;
  thisMonthIncome?: number;
}
const SummaryBoard: React.FC<SummaryBoardProps> = (props) => {
	const { thisMonthExpense = 0, thisMonthIncome = 0 } = props;
	

  const netRevenue = parseFloat(
    (thisMonthIncome - thisMonthExpense).toFixed(2)
	);
	

  return (
    <div>
      <Text style={{ fontWeight: 400 }}>Month Spend</Text>
      <div>
        <Typography.Title level={2}>
          ${thisMonthExpense.toString()}
        </Typography.Title>
      </div>

      <Row gutter={[12, 24]}>
        <Col span={6}>
          <Text style={{ fontWeight: 400 }}>Month Income</Text>
          <div>
            <Typography.Title level={4}>${thisMonthIncome}</Typography.Title>
          </div>
        </Col>
        <Col span={6}>
          <Text style={{ fontWeight: 400 }}>Month Revenue</Text>
          <div>
            <Typography.Title level={4}>
              {netRevenue < 0 ? `-$${-netRevenue}` : `+$${netRevenue}`}
            </Typography.Title>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SummaryBoard;
