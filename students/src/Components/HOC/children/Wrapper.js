const style = {backgroundColor: "blue"}

const WrapperComp = ({children})=>(
    <div style={style}>
        {children}
    </div>
);
export default WrapperComp;