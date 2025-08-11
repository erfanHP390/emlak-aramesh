"use client";
import React from "react";
import styles from "./Status.module.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// داده‌های نمونه برای نمودارها
const revenueData = [
  { name: "فروردین", value: 35 },
  { name: "اردیبهشت", value: 42 },
  { name: "خرداد", value: 38 },
  { name: "تیر", value: 45 },
];

const visitorsData = [
  { name: "فروردین", value: 80 },
  { name: "اردیبهشت", value: 97 },
  { name: "خرداد", value: 85 },
  { name: "تیر", value: 90 },
];

const reservationsData = [
  { name: "فروردین", value: 65 },
  { name: "اردیبهشت", value: 78 },
  { name: "خرداد", value: 72 },
  { name: "تیر", value: 80 },
];

const profitData = [
  { name: "سود", value: 75 },
  { name: "زیان", value: 25 },
];

const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF8042"];

function Status() {
  return (
    <div className={styles.gridContainer}>
      {/* درآمد کل */}
      <div className={styles.chartBox}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div className={styles.headerContainer}>
              <h3 className={styles.valueText}>
                4,789
                <span className={styles.smallText}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div className={`${styles.changeIndicator} ${styles.danger}`}>
                <i className="mdi mdi-chevron-down mdi-24px" />{" "}
                <span>
                  <small>58.7%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.titleText}>کل درآمد</h4>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.footerText}>+14.17% ماه گذشته</p>
          </div>
        </div>
      </div>

      {/* بازدیدکنندگان */}
      <div className={styles.chartBox}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div className={styles.headerContainer}>
              <h3 className={styles.valueText}>
                8,695
                <span className={styles.smallText}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div className={`${styles.changeIndicator} ${styles.success}`}>
                <i className="mdi mdi-chevron-up mdi-24px" />{" "}
                <span>
                  <small>97.5%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.titleText}>کل بازدیدکنندگان</h4>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.footerText}>-5.18% ماه گذشته</p>
          </div>
        </div>
      </div>

      {/* رزروها */}
      <div className={styles.chartBox}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div className={styles.headerContainer}>
              <h3 className={styles.valueText}>
                78%
                <span className={styles.smallText}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div className={`${styles.changeIndicator} ${styles.success}`}>
                <i className="mdi mdi-chevron-up mdi-24px" />{" "}
                <span>
                  <small>89.13%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.titleText}>کل رزروها</h4>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={reservationsData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ffc658"
                    fill="#ffc658"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.footerText}>+12.2% ماه گذشته</p>
          </div>
        </div>
      </div>

      {/* سود */}
      <div className={styles.chartBox}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div className={styles.headerContainer}>
              <h3 className={styles.valueText}>
                42.000
                <span className={styles.smallText}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div className={`${styles.changeIndicator} ${styles.danger}`}>
                <i className="mdi mdi-chevron-down mdi-24px" />{" "}
                <span>
                  <small>56.48%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.titleText}>سود</h4>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={profitData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {profitData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "نسبت"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.footerText}>+11.00% ماه گذشته</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
