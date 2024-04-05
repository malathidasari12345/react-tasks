

function ControlButton(props){
    const {text} = props
const {children} = props
    return(
        <>
        {children}
        {/* <button>{text}</button> */}
        {/* <button>{children}</button> */}
        </>
    )
}
export default ControlButton;