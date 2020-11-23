import React, { useState, useRef, useEffect } from "react";
import { getTransactions } from "../../selectors";
import { useSelector } from "react-redux";
import { CategoryItem } from "../../types";
import { Space, Select, DatePicker } from "antd";
import { Pie } from "react-chartjs-2";
import moment from "moment";
import _ from "lodash";
const { RangePicker } = DatePicker;
const { Option } = Select;
interface IncomePanelProps {
  categories: CategoryItem[];
}

const IncomePanel: React.FC<IncomePanelProps> = (props) => {
  const { categories } = props;
  const { transactions } = useSelector(getTransactions);
  const [paused, setPaused] = useState(false);
  const puasedTimer = useRef<number>();

  const [selectedCate, setSelectedCate] = useState("all");
  const [start, setStart] = useState(moment(new Date()).format("YYYY-MM"));
  const [end, setEnd] = useState(
    moment(new Date()).add(1, "M").format("YYYY-MM")
  );

  const rangeStartRef = useRef<string>(start);
  const rangeEndRef = useRef<string>(end);

  const setPausedWithDelay = (paused: boolean) => {
    clearTimeout(puasedTimer.current);
    puasedTimer.current = window.setTimeout(() => {
      setPaused(paused);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      window.clearTimeout(puasedTimer.current);
    };
  }, []);

  useEffect(() => {
    setStart(rangeStartRef.current);
    setEnd(rangeEndRef.current);
    return () => {};
  }, [paused]);

  const filteredTransactions = transactions.filter((transaction) => {
    let arr: string[] = [];
    if (selectedCate === "all") {
      arr = categories.map((cate) => cate.id);
    } else {
      arr = [selectedCate];
    }
    if (arr.indexOf(transaction.category) !== -1) {
      const { date: created } = transaction;
      const inRange =
        moment(created).isSameOrAfter(start, "M") &&
        moment(created).isSameOrBefore(end, "M");
      if (inRange) {
        return true;
      }
      return false;
    }
    return false;
  });
  const pieDataMap = new Map();
  filteredTransactions.forEach((transaction) => {
    const { category: cateId, amount } = transaction;
    pieDataMap.set(cateId, (pieDataMap.get(cateId) || 0) + amount);
  });

  const categoriesMap = new Map<string, CategoryItem>();

  categories.forEach((cate) => {
    categoriesMap.set(cate.id, cate);
  });
  const groupedData = _.groupBy(filteredTransactions, "category");
  let _data: number[] = [];

  Object.values(groupedData).forEach((arr) => {
    let count = 0;
    arr.forEach((element: any) => {
      count += element.amount;
    });
    _data.push(count as number);
  });

  const data = {
    labels: Object.keys(groupedData).map((id) => categoriesMap.get(id)?.name),
    datasets: [
      {
        label: "",
        data: _data.map((n) => n.toFixed(2)),
        backgroundColor: Object.keys(groupedData).map(
          (id) => categoriesMap.get(id)?.color
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="income-panel">
        <div className="income-panel__filter">
          <Space direction="horizontal" size={24}>
            <Select
              defaultValue={selectedCate}
              onChange={(value) => {
                setSelectedCate(value);
              }}
              style={{ width: 150 }}
            >
              {[
                <Option key={"all"} value={"all"}>
                  All
                </Option>,
                ...categories.map((cate) => (
                  <Option key={cate.id} value={cate.id}>
                    {cate.name}
                  </Option>
                )),
              ]}
            </Select>
            <RangePicker
              onCalendarChange={(dates, dateStrings) => {
                const [s, e] = dateStrings;
                rangeStartRef.current = s;
                rangeEndRef.current = e;
              }}
              onOpenChange={(open) => {
                setPausedWithDelay(open);
              }}
              picker="month"
              defaultValue={[moment(start), moment(end)]}
            />
          </Space>
        </div>

        <div style={{ marginTop: 40 }}>
          <Pie data={data} />
        </div>
      </div>
    </>
  );
};

export default IncomePanel;
