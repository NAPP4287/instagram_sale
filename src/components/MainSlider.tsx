import { mainImageData } from 'data/landingData';
import styles from 'assets/css/main.module.scss';
import { useState } from 'react';

const MainSlider = () => {
  const [fixNum, setFixNum] = useState<Number>(0);

  const onActiveBtn = (idx: number) => {
    setFixNum(idx);
  };

  return (
    <>
      {mainImageData.map((el, idx) => (
        <div
          key={idx}
          className={styles.mainImgWrap}
          style={{
            backgroundImage: `url(${el.src})`,
          }}
        ></div>
      ))}
      <div className={styles.slideButtonWrap}>
        {mainImageData.map((el, idx) => (
          <button
            className={`${styles.slideButton} ${
              idx === fixNum && styles.activeBtn
            }`}
            key={idx}
            onClick={() => onActiveBtn(idx)}
          >
            {el.num}
          </button>
        ))}
      </div>
    </>
  );
};

export default MainSlider;
