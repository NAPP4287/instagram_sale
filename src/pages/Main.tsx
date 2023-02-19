// css
import styles from 'assets/css/main.module.scss';
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
