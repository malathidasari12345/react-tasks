// import DisplayImage from "./image";

function ShowTable(prop){
    return(
        <>
         <tr>
            <td>{prop.data.id}</td>
            <td>{prop.data.name}</td>
            <td>{prop.data.type}</td>
            <td><img src={prop.data.image} alt={prop.data.type} height={100} width={100}></img></td>
         </tr>
        </>
    )
}
export default ShowTable;