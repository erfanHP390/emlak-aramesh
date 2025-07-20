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
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {data.map((entry, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default ChartContact;