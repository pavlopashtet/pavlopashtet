import styles from "./UserCard.module.scss"

const UserCard = ({title, handleClick, showInfo}) => (
    <>
        <p className={styles.box1}> TEEEEEEEXt</p>
        <div className={styles.box} onClick={() => handleClick(title)}>

            <div>
                <span onClick={showInfo}>{title}</span>
            </div>
        </div>
    </>
);
export default UserCard;
