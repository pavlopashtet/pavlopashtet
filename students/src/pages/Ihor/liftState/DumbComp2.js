import styles from "./DumbComp.module.css"

const DumbComp2 = ({fTitle, fOnClick}) => (
    <div>
        <button onClick={fOnClick}
        >
            {fTitle}
        </button>

    </div>
)

export default DumbComp2;