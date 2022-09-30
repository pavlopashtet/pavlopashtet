import styles from "../formState/formState.module.css";
import React from "react";

export const Bn = ({bn}) => {
    <div className={styles.box}>{Bn}</div>
}
// const initialFormData = Object.freeze({
//     usertext: "",
    
//   });
//   const FormState = () => {
//     const [formData, updateFormData] = React.useState(initialFormData);
  
//     const handleChange = (e) => {
//       updateFormData({
//         ...formData,
       
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       console.log(formData);
//       // ... submit to API or something
//     };
  
//     return (
//       <>
//         <label>
//           Usertext
//           <input name="username" onChange={handleChange} />
//         </label>      
//         <br />
//         <button onClick={handleSubmit}>Submit</button>
//       </>
//     );
//   };


class FormState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // <Bn bn={this.state.value}/>
    console.log(this.state.value);
    alert("Введіть текст" + this.state.value)
    // <div className={styles.box}>{this.state.value}</div>;
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form  onSubmit={this.handleSubmit}>
          <label>
            Введіть текст:
            <input name ="usertext" value={this.state.value} onChange={this.handleChange} />
          </label>
          
        </form>
        <button onClick={this.handleSubmit}>Submit</button>
      </>
    );
  }
}

export default FormState;
