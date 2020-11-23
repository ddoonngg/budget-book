import React from "react";
import TransactionsCollection from "./TransactionsCollection";
import CategorySummary from "./CategorySummary";
import ManageView from "./ManageView";
import Dashboard from "./Dashboard";
import SummaryBanner from "./SummaryBanner";
import { Row, Col } from "antd";
import "../mock/index";
import Header from "./Header";
import "./App.css";
import "./TransactionsCollection.scss";

function App() {
  return (
    <div>
      <Header/>
      <SummaryBanner />
      <main>
        <section className="section">
          <Row gutter={[48, 48]}>
            <Col className="gutter-row" span={24}>
              <TransactionsCollection />
            </Col>
          </Row>
        </section>

        <Row gutter={[48, 48]}>
          <Col className="gutter-row" span={24}>
            <ManageView />
          </Col>
        </Row>
        <Row gutter={[48, 48]}>
          <Col className="gutter-row" span={24}>
            <Dashboard />
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default App;
