import React from "react";
import styles from "./TimeLineTab.module.css";
import { CiImageOn } from "react-icons/ci";
import {
  FaMapMarkerAlt,
  FaRegSmile,
  FaThumbsUp,
  FaComment,
  FaShareAlt,
  FaClock,
} from "react-icons/fa";

function TimeLineTab() {
  return (
    <div className={`${styles.tabPane} ${styles.active}`} id="usertimeline">
      {/* Publisher Section */}
      <div
        className={`${styles.publisher} ${styles.publisherMulti} ${styles.borderBottom}`}
      >
        <textarea
          className={styles.publisherInput}
          rows={4}
          placeholder="چیزی بنویسید"
          defaultValue={""}
        />
        <div className={styles.flexbox}>
          <div className={styles.gapItems}>
            <span className={styles.publisherBtn}>
              <CiImageOn className={styles.publisherIcon} />
              <input type="file" className={styles.fileInput} />
            </span>
            <button className={styles.publisherBtn}>
              <FaMapMarkerAlt className={styles.publisherIcon} />
            </button>
            <button className={styles.publisherBtn}>
              <FaRegSmile className={styles.publisherIcon} />
            </button>
          </div>
          <button className={`${styles.postButton} ${styles.primary}`}>
            پست
          </button>
        </div>
      </div>

      {/* Post Box */}
      <div className={styles.box}>
        <div className={`${styles.media} ${styles.borderBottom}`}>
          <img
            className={styles.avatarLg}
            src="images/avatar/3.jpg"
            alt="..."
          />
          <div className={styles.mediaBody}>
            <p>
              <strong>ازاده</strong>
              <time className={styles.timeText} dateTime={2017}>
                24 دقیقه پیش
              </time>
            </p>
            <p>
              <small>فول استک</small>
            </p>
          </div>
        </div>
        <div className={`${styles.boxBody} ${styles.borderBottom}`}>
          <p className={styles.leadText}>
            این نوشته ها ساختگی است و اطلاعات دقیقی نمیباشد
          </p>
          <div className={`${styles.gapItems} ${styles.mt10}`}>
            <a className={styles.actionLink} href="#">
              <FaThumbsUp className={styles.actionIcon} /> 1254
            </a>
            <a className={styles.actionLink} href="#">
              <FaComment className={styles.actionIcon} /> 25
            </a>
            <a className={styles.actionLink} href="#">
              <FaShareAlt className={styles.actionIcon} /> 12
            </a>
          </div>
        </div>

        {/* Comments Section */}
        <div className={styles.mediaList}>
          <div className={styles.media}>
            <a className={styles.avatar} href="#">
              <img src="images/avatar/6.jpg" alt="..." />
            </a>
            <div className={styles.mediaBody}>
              <p>
                <a href="#">
                  <strong>لیلا</strong>
                </a>
                <time className={styles.timeText} dateTime="2017-07-14 20:00">
                  همین الان
                </time>
              </p>
              <p>این نوشته ها ساختگی است و اطلاعات دقیقی نمیباشد.</p>
              <div className={`${styles.media} ${styles.nestedMedia}`}>
                <a className={styles.avatar} href="#">
                  <img src="images/avatar/8.jpg" alt="..." />
                </a>
                <div className={styles.mediaBody}>
                  <p>
                    <a href="#">
                      <strong>صادق</strong>
                    </a>
                    <time
                      className={styles.timeText}
                      dateTime="2017-07-14 20:00"
                    >
                      26 دقیقه پیش
                    </time>
                  </p>
                  <p>تشکر از کامنت زیبای شما</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.media}>
            <a className={styles.avatar} href="#">
              <img src="images/avatar/9.jpg" alt="..." />
            </a>
            <div className={styles.mediaBody}>
              <p>
                <a href="#">
                  <strong>رامین</strong>
                </a>
                <time className={styles.timeText} dateTime="2017-07-14 20:00">
                  2 ساعت پیش
                </time>
              </p>
              <p>همه چی خوب بنظر میاد</p>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <form className={styles.commentForm}>
          <img
            className={styles.avatarSm}
            src="images/avatar/4.jpg"
            alt="..."
          />
          <input
            className={styles.commentInput}
            type="text"
            placeholder="کامنتتون رو بذارید"
          />
          <button className={styles.commentButton}>
            <FaRegSmile className={styles.commentIcon} />
          </button>
          <span className={styles.fileButton}>
            <CiImageOn className={styles.fileIcon} />
            <input type="file" className={styles.fileInput} />
          </span>
        </form>
      </div>

      {/* Timeline Section */}
      <div className={`${styles.box} ${styles.timelineContainer}`}>
        <div className={styles.timeline}>
          <span className={styles.timelineLabel}>
            <span className={`${styles.badge} ${styles.info}`}>تصاویر</span>
          </span>

          {/* Timeline Item 1 */}
          <div className={styles.timelineItem}>
            <div className={`${styles.timelinePoint} ${styles.success}`}>
              <CiImageOn className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineEvent}>
              <div className={styles.timelineHeading}>
                <h4 className={styles.timelineTitle}>
                  <a href="#">رشید</a>
                  <small>عکس جدیدی اپلود کرد</small>
                </h4>
              </div>
              <div className={styles.timelineBody}>
                <img
                  src="images/150x100.png"
                  alt="..."
                  className={styles.timelineImage}
                />
                <img
                  src="images/150x100.png"
                  alt="..."
                  className={styles.timelineImage}
                />
                <img
                  src="images/150x100.png"
                  alt="..."
                  className={styles.timelineImage}
                />
                <img
                  src="images/150x100.png"
                  alt="..."
                  className={styles.timelineImage}
                />
              </div>
              <div className={styles.timelineFooter}>
                <p className={styles.timelineTime}>
                  <FaClock className={styles.timeIcon} /> 8 روز پیش
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className={styles.timelineItem}>
            <div className={`${styles.timelinePoint} ${styles.info}`}>
              <FaComment className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineEvent}>
              <div className={styles.timelineHeading}>
                <h4 className={styles.timelineTitle}>
                  <a href="#">مختار مینائی</a>
                  <small>برای پست شما کامنت گذاشت</small>
                </h4>
              </div>
              <div className={styles.timelineBody}>
                <p>این نوشته ها ساختگی است و اطلاعات دقیقی نمیباشد</p>
              </div>
              <div className={styles.timelineFooter}>
                <button
                  className={`${styles.timelineButton} ${styles.success}`}
                >
                  مشاهده کامنت
                </button>
                <p className={styles.timelineTime}>
                  <FaClock className={styles.timeIcon} /> 8 روز پیش
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className={styles.timelineItem}>
            <div className={`${styles.timelinePoint} ${styles.danger}`}>
              <FaMapMarkerAlt className={styles.timelineIcon} />
            </div>
            <div className={styles.timelineEvent}>
              <div className={styles.timelineHeading}>
                <h4 className={styles.timelineTitle}>
                  <a href="#"> مختار مینائی</a>
                  <small> یک عکس نقشه ارسال کرد</small>
                </h4>
              </div>
              <div className={styles.timelineBody}>
                <div className={styles.ratioBox}>
                  <img src="images/g.jpg" alt="map" />
                </div>
              </div>
              <div className={styles.timelineFooter}>
                <button
                  className={`${styles.timelineButton} ${styles.success}`}
                >
                  مشاهده کامنت
                </button>
                <p className={styles.timelineTime}>
                  <FaClock className={styles.timeIcon} /> 8 روز پیش
                </p>
              </div>
            </div>
          </div>

          <span className={styles.timelineLabel}>
            <button className={`${styles.loadMoreButton} ${styles.danger}`}>
              <FaClock className={styles.loadMoreIcon} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimeLineTab;
