"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./ChartContact.module.css";

const ChartContact = () => {
  const data = [
    { name: "ملک‌های فروخته شده", value: 42 },
    { name: "ملک‌های اجاره داده شده", value: 28 },
    { name: "ملک‌های جدید ثبت شده", value: 18 },
    { name: "بازدیدهای انجام شده", value: 12 },
  ];

  const COLORS = ["#8ab4ff", "#6bd098", "#fcc468", "#ff9e7d"];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.customTooltip}>
          <p className={styles.tooltipLabel}>{payload[0].name}</p>
          <p className={styles.tooltipValue}>
            {payload[0].value} مورد ({(payload[0].payload.percent * 100).toFixed(1)}%)
          </p>
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
            <span className={styles.legendText}>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`${styles.col12} ${styles.colXl4}`}>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h4 className={styles.boxTitle}>آمار املاک</h4>
        </div>
        <div className={styles.boxBody}>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => 
                    percent > 0.05 ? `${name}: ${(percent * 100).toFixed(0)}%` : null
                  }
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend content={renderLegend} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartContact;