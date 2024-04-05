
import {data} from "./data.js"
import { Tabledata } from "./tableprop.jsx";
const TableComponent = ()=>
{
    return(
        <>
        <table>
            <tbody>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Contact</th>
                </tr>
                 {
                    data.map((val)=>{
                        return(
                            <>
                            {/* withprops */}
                            <Tabledata  data1 ={val} data2={"hello"}/>
                            </>
                            // without props
                        //    <tr>
                        //     <td>{val[0]}</td>
                        //     <td>{val[1]}</td>
                        //     <td>{val[2]}</td>
                        //     <td>{val[3]}</td>
                        //     <td>{val[4]}</td>
                        //    </tr>
                        )
                    })
                   } 
            </tbody>
        </table>
        </>

    )

    
}
export default TableComponent ; 