"use client"
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
    <>
      {/* درآمد کل */}
      <div className={styles.col12}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div
              className={`${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
            >
              <h3 className={`${styles.fw700} ${styles.mt0}`}>
                4,789
                <span className={styles.textMuted}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div
                className={`${styles.textDanger} ${styles.fw700} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              >
                <i className="mdi mdi-chevron-down mdi-24px" />{" "}
                <span>
                  <small>58.7%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.textPrimary}>کل درآمد</h4>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.mb5}>+14.17% ماه گذشته</p>
          </div>
        </div>
      </div>

      {/* بازدیدکنندگان */}
      <div className={styles.col12}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div
              className={`${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
            >
              <h3 className={`${styles.fw700} ${styles.mt0}`}>
                8,695
                <span className={styles.textMuted}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div
                className={`${styles.textSuccess} ${styles.fw700} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              >
                <i className="mdi mdi-chevron-up mdi-24px" />{" "}
                <span>
                  <small>97.5%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.textPrimary}>کل بازدیدکنندگان</h4>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={visitorsData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#82ca9d"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.mb5}>-5.18% ماه گذشته</p>
          </div>
        </div>
      </div>

      {/* رزروها */}
      <div className={styles.col12}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div
              className={`${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
            >
              <h3 className={`${styles.fw700} ${styles.mt0}`}>
                78%
                <span className={styles.textMuted}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div
                className={`${styles.textSuccess} ${styles.fw700} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              >
                <i className="mdi mdi-chevron-up mdi-24px" />{" "}
                <span>
                  <small>89.13%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.textPrimary}>کل رزروها</h4>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={reservationsData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" />
                  <YAxis />
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
            <p className={styles.mb5}>+12.2% ماه گذشته</p>
          </div>
        </div>
      </div>

      {/* سود */}
      <div className={styles.col12}>
        <div className={styles.box}>
          <div className={styles.boxBody}>
            <div
              className={`${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
            >
              <h3 className={`${styles.fw700} ${styles.mt0}`}>
                42.000
                <span className={styles.textMuted}>
                  <small> / ماهیانه</small>
                </span>
              </h3>
              <div
                className={`${styles.textDanger} ${styles.fw700} ${styles.dFlex} ${styles.justifyContentBetween} ${styles.alignItemsCenter}`}
              >
                <i className="mdi mdi-chevron-down mdi-24px" />{" "}
                <span>
                  <small>56.48%</small>
                </span>
              </div>
            </div>
            <h4 className={styles.textPrimary}>سود</h4>
            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={profitData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {profitData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className={styles.mb5}>+11.00% ماه گذشته</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Status;
