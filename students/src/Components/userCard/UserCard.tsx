// @ts-ignore
import styles from './UserCard.module.scss';
interface Props {
    title: string
    handleClick: (info: string) => void
    showInfo: ()=> void
}
const UserCard = ({title, handleClick, showInfo}:Props) => (
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
