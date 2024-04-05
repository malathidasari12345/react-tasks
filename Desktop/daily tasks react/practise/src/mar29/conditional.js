


// conditional rendering

const Condition = ()=>{
    const isloggedin = true;

    return(
        <>
        {/* {
            isloggedin ? <h2>welcome</h2> :<h3>pleaseLogin</h3> 
        } */}
        {/* {
           isloggedin ? <Text  msg="login"/>:<Text msg="hello"/>
        } */}
        {/* using logical operator */}
        {
          isloggedin &&
          <Text  msg="login"/>
        }
        
        </>
    )
}

export default Condition;

 const Text =({msg})=>{
    return(
        <>
          <h1>{msg}</h1>
        </>
    )
}
 