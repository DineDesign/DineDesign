import React from 'react';
import styles from './InfiniteScroll.module.css'; // Adjust the path as per your file structure

const TAGS = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js'];

const InfiniteScroll = () => {
  const DURATION = 15000;
  const ROWS = 5;
  const TAGS_PER_ROW = 5;

  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Infinite Scroll Animation</h1>
        <p>CSS only, content independent, bi-directional, customizable</p>
      </header>
      <div className={styles.tagList}>
        {[...new Array(ROWS)].map((_, i) => (
          <div className={styles.loopSlider} key={i} style={{
            '--duration': `${random(DURATION - 5000, DURATION + 5000)}ms`,
            '--direction': i % 2 === 0 ? 'normal' : 'reverse'
          }}>
            <div className={styles.inner}>
              {shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag, index) => (
                <div className={styles.tag} key={`${tag}-${index}`}>
                  #{tag}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.fade} />
      </div>
    </div>
  );
};

export default InfiniteScroll;
