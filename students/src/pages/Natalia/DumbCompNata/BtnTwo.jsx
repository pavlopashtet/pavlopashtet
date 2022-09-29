import styles from "./CompNata.module.scss";

const BtnTwo= ({handelClick,className}) =>{
    return (
        <button
            className={className}
            style={btn.style}
            onClick={handelClick}
  >
            Two
        </button>
    )
}
export default BtnTwo