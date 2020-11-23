import React, { useState } from "react";

import { Tabs, Select, DatePicker, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../selectors";
import { CategoryItem, CategoryType } from "../types";
import ExpensePanel from "../components/Dashboard/ExpensePanel";
import IncomePanel from "../components/Dashboard/IncomePanel";
import { addCategory, loadCategories } from "../slices/category";
import moment from "moment";

const { TabPane } = Tabs;
const { Option } = Select;

const { RangePicker } = DatePicker;

const Dashboard = () => {
  const { categories } = useSelector(getCategories);
  const [activeCategoryType, setActiveCategoryType] = useState<CategoryType>(
    CategoryType.EXPENSE
  );

  const dispatch = useDispatch();
  const handleActiveTabChange = (activeKey: string) => {
    setActiveCategoryType(activeKey as CategoryType);
  };

  const categories1: CategoryItem[] = [];
  const categories2: CategoryItem[] = [];
  categories.forEach((cate) => {
    if (cate.categoryType === CategoryType.EXPENSE) {
      categories1.push(cate);
    } else {
      categories2.push(cate);
    }
  });
  
  return (
    <Tabs
      defaultActiveKey={activeCategoryType}
      onChange={handleActiveTabChange}
    >
      <TabPane tab={CategoryType.EXPENSE} key={CategoryType.EXPENSE}>
        <ExpensePanel categories={categories1} />
      </TabPane>
      <TabPane tab={CategoryType.INCOME} key={CategoryType.INCOME}>
        <IncomePanel categories={categories2} />
      </TabPane>
    </Tabs>
  );
};

export default Dashboard;
