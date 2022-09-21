import styles from "./DumbComponent.module.css";

const DumbComponent = ({user,index, deleteUser}) => {
        return (
            <div className={styles.container}
            style={{color: "red"}}
            onClick={()=> deleteUser(index)}
            >
                    <p>Name: {user.name}</p>
                    <p>UserName: {user.username}</p>
                    <p>Email: {user.email}</p>
            </div>
        )
};
export default DumbComponent;
