"use client"
import React, { useEffect, useState } from 'react';
import styles from './loading.module.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.creativeLoading}>
      <div className={styles.loadingContainer}>
        {/* House Animation */}
        <div className={styles.houseAnimation}>
          <div className={styles.houseRoof}></div>
          <div className={styles.houseBase}></div>
          <div className={styles.houseDoor}></div>
          <div className={styles.houseWindow}></div>
          <div className={styles.houseWindow}></div>
          
          {/* Floating Keys Animation */}
          <div className={styles.loadingKeys}>
            <div className={styles.key}></div>
            <div className={styles.key}></div>
            <div className={styles.key}></div>
          </div>
        </div>
        
        {/* Text Content */}
        <h1 className={`${styles.loadingTitle} Anjoman_ExtraBold`}>در حال باز کردن درب ...</h1>
        <p className={`${styles.loadingSubtitle} Anjoman_Medium`}>
          سیستم املاک آرامش در حال آماده‌سازی بهترین  برای شماست
        </p>
        
        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;