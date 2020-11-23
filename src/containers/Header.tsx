import React from "react";
import Toolbar from "./Toolbar";
import { Row, Col, Typography } from "antd";
import "./Header.scss";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <header className="global-header">
      <div className="global-header__inner">
        <Row gutter={20} justify="space-between" align="middle">
          <Col span="18">
            <div className="logo">
							<img src={logo} width={200} alt="logo" />
            </div>
          </Col>
          <Col span="6">
            <Toolbar />
          </Col>
        </Row>
      </div>
    </header>
  );
};
export default Header;
