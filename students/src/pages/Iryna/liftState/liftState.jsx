import Component from "./liftStateComponent/Component";
import Component2 from "./liftStateComponent/Component2";
import styles from "./liftState.module.css"
const MainComponent = () => (
    <>
    <div className={styles.box}></div>
    <br/>
   <Component/>   
   <br/><br/>
   <Component2/>
    </>
    
    
);

export default MainComponent;