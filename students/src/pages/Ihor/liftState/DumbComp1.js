import styles from './DumbComp.module.css'

const DumbComp1 = ({fTitle, fOnClick}) => (
    <div>
        <button style={{margin: '5px 0'}} onClick={fOnClick}
        >
            {fTitle}
        </button>

    </div>
)

export default DumbComp1;
