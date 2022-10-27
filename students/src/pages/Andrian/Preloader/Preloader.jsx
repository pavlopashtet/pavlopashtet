import s from "../Preloader/Preloader.module.css"
 
 
 const Preloader=(props)=>{

return(
    props.isResponseCome?<div className={s.lds_roller}><div></div><div></div><div></div><div></div>
<div></div><div></div><div></div><div></div></div>:null
)

 }
 export default Preloader