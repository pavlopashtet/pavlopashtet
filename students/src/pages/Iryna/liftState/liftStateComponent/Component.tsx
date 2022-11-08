//@ts-ignore
import styles from "../liftState.module.css";
export interface Props{
  setBg: (bg: string) => void,
  Color:string
}
const Component = ({ setBg, Color}:Props) => {
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

