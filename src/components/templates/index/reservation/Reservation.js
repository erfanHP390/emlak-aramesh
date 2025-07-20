"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styles from "./Reservation.module.css";

const Reservation = () => {
  // داده‌های نمونه برای مقایسه دو ماه
  const data = [
    {
      name: "تایید شده",
      ماه_جاری: 65,
      ماه_گذشته: 55,
    },
    {
      name: "در انتظار",
      ماه_جاری: 15,
      ماه_گذشته: 20,
    },
    {
      name: "لغو شده",
      ماه_جاری: 10,
      ماه_گذشته: 15,
    },
    {
      name: "تکمیل شده",
      ماه_جاری: 10,
      ماه_گذشته: 10,
    },
  ];

  return (
    <div className={`${styles.col12} ${styles.colXl4}`}>
      <div className={styles.box}>
        <div className={styles.boxHeader}>
          <h4 className={styles.boxTitle}>مقایسه وضعیت رزروها</h4>
        </div>
        <div className={styles.boxBody}>
          <div className={styles.chartContainer}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={25}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: 'var(--text-primary)' }}
                />
                <YAxis 
                  tick={{ fill: 'var(--text-primary)' }}
                />
                <Tooltip
                  contentStyle={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--input-border)",
                    borderRadius: "8px",
                    fontFamily: "Anjoman_Regular",
                    fontSize: "14px",
                  }}
                  itemStyle={{
                    color: "var(--text-primary)",
                    fontFamily: "Anjoman_Medium",
                  }}
                  formatter={(value, name) => [`${value} رزرو`, name === 'ماه_جاری' ? 'ماه جاری' : 'ماه گذشته']}
                />
                <Legend 
                  formatter={(value) => (value === 'ماه_جاری' ? 'ماه جاری' : 'ماه گذشته')}
                  wrapperStyle={{
                    fontFamily: "Anjoman_Regular",
                    color: "var(--text-primary)",
                    paddingTop: '20px'
                  }}
                />
                <Bar
                  dataKey="ماه_گذشته"
                  fill="#8ab4ff"
                  radius={[4, 4, 0, 0]}
                  name="ماه گذشته"
                />
                <Bar
                  dataKey="ماه_جاری"
                  fill="#6bd098"
                  radius={[4, 4, 0, 0]}
                  name="ماه جاری"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;