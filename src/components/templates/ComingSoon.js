"use client"
import React, { useState, useEffect } from 'react';
import styles from '@/styles/soon.module.css';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');

  // Set launch date (example: 7 days from now)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 7);
      
      const now = new Date();
      const difference = launchDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    alert('اطلاعات شما با موفقیت ثبت شد! هنگام راه‌اندازی به شما اطلاع خواهیم داد.');
    setEmail('');
  };

  return (
    <div className={styles.creativeComingSoon}>
      <div className={styles.comingSoonContainer}>
        {/* Construction Illustration */}
        <div className={styles.constructionIllustration}>
          <div className={styles.building}>
            <div className={styles.buildingBase}></div>
            <div className={styles.buildingRoof}></div>
          </div>
          <div className={styles.constructionCrane}>
            <div className={styles.craneTower}></div>
            <div className={styles.craneArm}></div>
            <div className={styles.craneHook}></div>
            <div className={styles.brick}></div>
          </div>
        </div>

        {/* Coming Soon Content */}
        <h1 className={`${styles.comingSoonTitle} Anjoman_ExtraBold`}>به زودی راه‌اندازی می‌شویم!</h1>
        <p className={`${styles.comingSoonMessage} Anjoman_Regular`}>
          ما در حال ساخت تجربه‌ای فوق‌العاده برای شما هستیم.
          <br />
          این صفحه به زودی با امکانات جدید راه‌اندازی خواهد شد.
        </p>

        {/* Countdown Timer */}
        <div className={styles.countdown}>
          <div className={styles.countdownItem}>
            <div className={`${styles.countdownNumber} Anjoman_Bold`}>{timeLeft.days}</div>
            <div className={`${styles.countdownLabel} Anjoman_Medium`}>روز</div>
          </div>
          <div className={styles.countdownItem}>
            <div className={`${styles.countdownNumber} Anjoman_Bold`}>{timeLeft.hours}</div>
            <div className={`${styles.countdownLabel} Anjoman_Medium`}>ساعت</div>
          </div>
          <div className={styles.countdownItem}>
            <div className={`${styles.countdownNumber} Anjoman_Bold`}>{timeLeft.minutes}</div>
            <div className={`${styles.countdownLabel} Anjoman_Medium`}>دقیقه</div>
          </div>
          <div className={styles.countdownItem}>
            <div className={`${styles.countdownNumber} Anjoman_Bold`}>{timeLeft.seconds}</div>
            <div className={`${styles.countdownLabel} Anjoman_Medium`}>ثانیه</div>
          </div>
        </div>

        {/* Notification Form */}
        <form onSubmit={handleSubmit} className={styles.notifyForm}>
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className={styles.notifyInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className={`${styles.notifyButton} Anjoman_Medium`}>
            اطلاع رسانی
          </button>
        </form>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79377 10.2009 8.40627C10.9477 8.01878 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52152 14.8716 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#" className={styles.socialLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C4.00035 5.85752 3.26375 6.95991 2.7612 8.17317C2.25866 9.38642 2 10.6868 2 12C2 15.3137 4 18 7 19.5V15H5V12H7V9.5C7 7.567 8.567 6 10.5 6H13V9H11V12H13V19.5C16 18 18 15.3137 18 12H16V15H19.5C19 18 16.5 20 13 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;