import styles from "../liftState.module.css";
const Component2 = ({ setBg, Color}) => {
  return (
    <button
      className={styles.bt}
      onClick={() => {
        setBg(Color);
      }}
    >
      Second
    </button>
  );
};
export default Component2;
