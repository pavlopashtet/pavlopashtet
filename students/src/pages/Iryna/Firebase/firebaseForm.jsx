import { useEffect, useState } from "react";
import styles from "../inputState/inputState.module.css";
import db, { storage } from "../Firebase/firebase";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
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
    image: null,
    imageName: null,
  });
  const [editFormValues, setEditFormValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
    image: null,
    imageName: null,
  });
  const [editID, setEditID] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
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
        image: user.image,
        imageName: user.imageName,
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
  const handleUpload = (e) => {
    setIsDisabled((prevState) => !prevState);
    const storageRef = ref(storage, `/images/${e.target.files[0].name}`);
    const uploadData = uploadBytesResumable(storageRef, e.target.files[0]);
    uploadData.on(
      "state_changed",
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadData.snapshot.ref).then((url) => {
          setEditFormValues({
            ...editFormValues,
            image: url,
            imageName: e.target.files[0].name,
          });
          setIsDisabled((prevState) => !prevState);
        });
      }
    );
  };
  const handleDeleteImage = (item) => {
    const imageRef = ref(storage, `images/${item.imageName}`);
    // Delete the file
    deleteObject(imageRef)
      .then(() => {
        editUser({
          ...item,
          imageName: null,
          image: null,
        });
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    users?.length > 0 && console.log(users);
  }, [users]);
  return (
    <div className={styles.inputState}>
      {/* <br/><br/><br/>
      <input type = "file" onChange={handleUpload}/>
      <br/><br/><br/><br/><br/> */}
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
      <br />
      <br />
      <br />

      {users?.length > 0 &&
        users?.map((item) => (
          <div key={item.id}>
            {editID !== item.id ? (
              <>
                <h3 className={styles.p}>
                  {item.firstname} {item.lastname} {item.age}
                </h3>
                {item?.image !== "" && (
                  <>
                    <img src={item.image} alt="" />
                    <button
                      style={{
                        backgroundColor: "deepskyblue",
                        color: "white",
                      }}
                      onClick={() => handleDeleteImage(item)}
                    >
                      {" "}
                      Delete Image{" "}
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <input type="file" onChange={handleUpload} />
                <br /> <br /> <br />
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
              disabled={editID === item.id && isDisabled}
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
