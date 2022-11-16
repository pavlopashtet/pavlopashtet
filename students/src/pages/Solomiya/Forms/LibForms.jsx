// import React from "react";
// import styles from "./SolForms.module.scss";
// import { Forms, Button, ButtonToolbar, Schema, Panel, FlexboxGrid } from 'rsuite';
// import { createRoot } from "react-dom/client";
// import { JSONTree } from 'react-json-tree';
//
// const JSONView = ({ formValue, formError }) => (
//     <div style={{ marginBottom: 10 }}>
//         {/*<Panel className="json-tree-wrapper" header={<p>formValue</p>}>*/}
//         {/*    <JSONTree data={formValue} />*/}
//         {/*</Panel>*/}
//
//         {/*<Panel className="json-tree-wrapper" header={<p>formError</p>}>*/}
//         {/*    <JSONTree data={formError} />*/}
//         {/*</Panel>*/}
//     </div>
// );
//
// const { StringType, NumberType } = Schema.Types;
//
// const model = Schema.Model({
//     name: StringType().isRequired('This field is required.'),
//     email: StringType()
//         .isEmail('Please enter a valid email address.')
//         .isRequired('This field is required.'),
//     age: NumberType('Please enter a valid number.').range(
//         18,
//         30,
//         'Please enter a number from 18 to 30'
//     ),
//     password: StringType().isRequired('This field is required.'),
//     verifyPassword: StringType()
//         .addRule((value, data) => {
//             console.log(data);
//
//             if (value !== data.password) {
//                 return false;
//             }
//
//             return true;
//         }, 'The two passwords do not match')
//         .isRequired('This field is required.')
// });
//
// const TextField = React.forwardRef((props, ref) => {
//     const { name, label, accepter, ...rest } = props;
//     return (
//         <Forms.Group controlId={`${name}-4`} ref={ref}>
//             <Forms.ControlLabel>{label} </Forms.ControlLabel>
//             <Forms.Control name={name} accepter={accepter} {...rest} />
//         </Forms.Group>
//     );
// });
//
// const LibForm = () => {
//     const formRef = React.useRef();
//     const [formError, setFormError] = React.useState({});
//     const [formValue, setFormValue] = React.useState({
//         name: '',
//         email: '',
//         age: '',
//         password: '',
//         verifyPassword: ''
//     });
//
//     const handleSubmit = () => {
//         if (!formRef.current.check()) {
//             console.error('Forms Error');
//             return;
//         }
//         console.log(formValue, 'Forms Value');
//     };
//
//     const handleCheckEmail = () => {
//         formRef.current.checkForField('email', checkResult => {
//             console.log(checkResult);
//         });
//     };
//
//     return (
//         <FlexboxGrid className={styles.background}>
//             <FlexboxGrid.Item colspan={12}>
//                 <Forms
//                     ref={formRef}
//                     onChange={setFormValue}
//                     onCheck={setFormError}
//                     formValue={formValue}
//                     model={model}
//                 >
//                     <TextField name="name" label="Username" />
//                     <TextField name="email" label="Email" />
//                     <TextField name="age" label="Age" />
//                     <TextField name="password" label="Password" type="password" autoComplete="off" />
//                     <TextField
//                         name="verifyPassword"
//                         label="Verify password"
//                         type="password"
//                         autoComplete="off"
//                     />
//
//                     <ButtonToolbar>
//                         <Button appearance="primary" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//
//                         <Button onClick={handleCheckEmail}>Check Email</Button>
//                     </ButtonToolbar>
//                 </Forms>
//             </FlexboxGrid.Item>
//             <FlexboxGrid.Item colspan={12}>
//                 <JSONView formValue={formValue} formError={formError} />
//             </FlexboxGrid.Item>
//         </FlexboxGrid>
//     );
// };
//
// const container = document.getElementById('root');
//
// // Create a root.
// const root = createRoot(container);
//
// // Initial render
// root.render(<LibForm />);
//
// export default LibForm