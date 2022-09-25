import styles from "../liftState.module.css";

const Component = ({ setBg, Color}) => {
  return (
    <button
      className={styles.bt}
      onClick={() => {
        setBg(Color);
      }}
    >
      First
    </button>
  );
};
export default Component;
