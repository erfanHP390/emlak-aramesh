"use client"
import React, { useState } from 'react';
import styles from '@/styles/404.module.css';

const CreativeNotFound = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={styles.creativeNotFound}>
      <div className={styles.notFoundContainer}>
        {/* Map Search Illustration */}
        <div className={styles.notFoundIllustration}>
          <div className={styles.mapSearch}>
            <div className={styles.map}></div>
            <div className={styles.searchLight}></div>
            <div className={styles.mapMarker}></div>
          </div>
        </div>

        {/* Not Found Content */}
        <div className={`${styles.notFoundCode} Anjoman_Heavy`}>404</div>
        <h1 className={`${styles.notFoundTitle} Anjoman_Bold`}>ملک مورد نظر یافت نشد!</h1>
        <p className={`${styles.notFoundMessage} Anjoman_Regular`}>
          آدرس وارد شده معتبر نیست یا صفحه مورد نظر وجود ندارد.
          <br />
          می‌توانید از جستجو استفاده کنید یا به صفحه اصلی بازگردید.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className={styles.searchContainer}>
          <input
            type="text"
            placeholder="جستجو در املاک آرامش..."
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className={styles.searchIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </form>

        {/* Action Buttons */}
        <div className={styles.notFoundActions}>
          <button 
            className={`${styles.notFoundButton} Anjoman_Medium`}
            onClick={() => window.location.href='/'}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            بازگشت به خانه
          </button>
          
          <button 
            className={`${styles.notFoundButton} Anjoman_Medium`}
            onClick={() => window.location.href='/properties'}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9.5L12 4L21 9.5M5 20H9V14H15V20H19V11L12 6.5L5 11V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            مشاهده املاک
          </button>
          
          <button 
            className={`${styles.notFoundButton} Anjoman_Medium`}
            onClick={() => window.location.href='/contact'}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92ZM16 3.99999H4C2.9 3.99999 2 4.89999 2 5.99999V15.92H4V13.92H16V15.92H18V5.99999C18 4.89999 17.1 3.99999 16 3.99999ZM16 11.92H4V5.99999H16V11.92Z" fill="currentColor"/>
            </svg>
            تماس با پشتیبانی
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreativeNotFound;
