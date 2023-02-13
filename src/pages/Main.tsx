// css
import styles from 'assets/css/main.module.css';
// components
import MainSlider from 'components/MainSlider';

const Main = () => {
  return (
    <div className={styles.mainWrap}>
      <MainSlider />
    </div>
  );
};

export default Main;
