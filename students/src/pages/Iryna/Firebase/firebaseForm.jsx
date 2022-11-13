import { useEffect, useState } from "react";
// import { getCharacter, postPostToPlaceholder } from "../../../api/apiCalls";
// import { Link } from "react-router-dom";
// import { RedirectRoutes } from "../../../common/Routes";
// import {Character, Info} from "../Redux";
import styles from "../inputState/inputState.module.css";
import db from "../Firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

const FirebaseForm = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });
  const [editFormValues, setEditFormValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });
  const [editID, setEditID] = useState("");
  const [users, setUsers] = useState([]);
  const collectionRef = collection(db, "users");
  const handleInputChange = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };
  const addInfo = async () => {
    try {
      const docRef = await addDoc(collectionRef, formValues);
      console.log(docRef);
    } catch (e) {
      console.log(e);
    }
  };
  const getInfo = () => {
    onSnapshot(collectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  };
  const deleteUser = async (userId) => {
    const docRef = doc(db, "users", userId);
    try {
      await deleteDoc(docRef);
    } catch (e) {
      console.log(e);
    }
  };

  const editUser = async (user) => {
    const docRef = doc(db, "users", user.id);
    try {
      await setDoc(docRef, {
        firstname: user.firstname,
        lastname: user.lastname,
        age: user.age,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addInfo();
  };

  const handleEdit = (user) => {
    if (user.id === editID) {
      editUser(editFormValues);
      setEditID("");
    } else {
      setEditID(user.id);
      setEditFormValues(user);
    }
  };
  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    users?.length > 0 && console.log(users);
  }, [users]);
  return (
    <div className={styles.inputState}>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname <br />
          <input
            className={styles.input}
            name="firstname"
            type="text"
            value={formValues.firstname}
            onChange={(e) => handleInputChange("firstname", e.target.value)}
          />
        </label>
        <br />
        <label>
          Lastname: <br />
          <input
            className={styles.input}
            name="lastname"
            type="text"
            value={formValues.lastname}
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />
        </label>
        <br />
        <label>
          Your age <br />
          <input
            className={styles.input}
            name="age"
            type="number"
            value={formValues.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
          />
        </label>
        <input
          style={{
            backgroundColor: "pink",
            color: "red",
            marginLeft: "10px",
            marginTop: "30px",
          }}
          type="submit"
          value="Submit"
        />
      </form>

      {users?.length > 0 &&
        users?.map((item) => (
          <div key={item.id}>
            {editID !== item.id ? (
              <h3 className={styles.p}>
                {item.firstname} {item.lastname} {item.age}
              </h3>
            ) : (
              <>
                <input
                  style={{ color: "blue" }}
                  type="text"
                  value={editFormValues.firstname}
                  onChange={(e) =>
                    setEditFormValues({
                      ...editFormValues,
                      firstname: e.target.value,
                    })
                  }
                />
                <input
                  style={{ color: "blue" }}
                  type="text"
                  value={editFormValues.lastname}
                  onChange={(e) =>
                    setEditFormValues({
                      ...editFormValues,
                      lastname: e.target.value,
                    })
                  }
                />
              </>
            )}
            <button
              style={{
                backgroundColor: "pink",
                color: "red",
                marginLeft: "10px",
                marginTop: "30px",
              }}
              onClick={() => deleteUser(item.id)}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: "violet",
                color: "white",
                marginLeft: "10px",
                marginTop: "30px",
              }}
              onClick={() => handleEdit(item)}
            >
              {editID !== item.id ? "Edit" : "Save"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default FirebaseForm;
