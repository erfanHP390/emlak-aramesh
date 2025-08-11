"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import styles from "./Reservation.module.css";

const Reservation = () => {
  const data = [
    { name: "تایید شده", ماه_جاری: 65, ماه_گذشته: 55 },
    { name: "در انتظار", ماه_جاری: 15, ماه_گذشته: 20 },
    { name: "لغو شده", ماه_جاری: 10, ماه_گذشته: 15 },
    { name: "تکمیل شده", ماه_جاری: 10, ماه_گذشته: 10 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <h4 className={styles.tooltipHeader}>{label}</h4>
          <div className={styles.tooltipItems}>
            {payload.map((item, index) => (
              <div key={`tooltip-${index}`} className={styles.tooltipItem}>
                <span
                  className={styles.tooltipColor}
                  style={{ backgroundColor: item.color }}
                />
                <span className={styles.tooltipName}>
                  {item.name === "ماه_جاری" ? "ماه جاری" : "ماه گذشته"}:
                </span>
                <span className={styles.tooltipValue}>{item.value} رزرو</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul className={styles.legendContainer}>
        {payload.map((entry, index) => (
          <li key={`legend-${index}`} className={styles.legendItem}>
            <span
              className={styles.legendIcon}
              style={{ backgroundColor: entry.color }}
            />
            <span className={styles.legendText}>
              {entry.value === "ماه_جاری" ? "ماه جاری" : "ماه گذشته"}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`${styles.col12} ${styles.colXl4}`}>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h4 className={styles.boxTitle}>روند وضعیت رزروها</h4>
        </div>
        <div className={styles.boxBody}>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 20,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "var(--text-primary)",
                    fontFamily: "Anjoman_Medium",
                  }}
                  axisLine={{ stroke: "var(--input-border)" }}
                  tickLine={{ stroke: "var(--input-border)" }}
                />
                <YAxis
                  tick={{
                    fill: "var(--text-primary)",
                    fontFamily: "Anjoman_Regular",
                  }}
                  axisLine={{ stroke: "var(--input-border)" }}
                  tickLine={{ stroke: "var(--input-border)" }}
                >
                  <Label
                    value="تعداد رزرو"
                    angle={-90}
                    position="insideLeft"
                    style={{
                      textAnchor: "middle",
                      fontFamily: "Anjoman_Medium",
                    }}
                  />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={renderLegend} />
                <Line
                  type="monotone"
                  dataKey="ماه_گذشته"
                  stroke="#8ab4ff"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                  name="ماه گذشته"
                />
                <Line
                  type="monotone"
                  dataKey="ماه_جاری"
                  stroke="#6bd098"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                  name="ماه جاری"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
