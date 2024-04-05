


export const Tabledata =(props)=>{
    // destructer
    // left=right
    //extraction one = from which 
   const {data1,data2}= props
    return(
        <>
        {/* <tr>
           <td>{malathi.tr[0]}</td>
           <td>{malathi.tr[1]}</td>
           <td>{malathi.tr[2]}</td>
           <td>{malathi.tr[3]}</td>
           <td>{malathi.tr[4]}</td>
        </tr> */}
        {/*  using des*/}
        <tr>
           <td>{data1[0]}</td>
           <td>{data1[1]}</td>
           <td>{data1[2]}</td>
           <td>{data1[3]}</td>
           <td>{data1[4]}</td>
           <td>{data2[0]}</td>
           <td>{data2[1]}</td>
           <td>{data2}</td>
      </tr>
        </>
    )
}