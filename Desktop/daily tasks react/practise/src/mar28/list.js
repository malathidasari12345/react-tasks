import ListItems from "./listItem"

 


 const ListComponent = ()=>{

    const listItem =[
        {
            name : "apple",
            type: "fruit",
            isFruit: true
        },
        {
            name : "banana",
            type: "fruit",
            isFruit: true
        },
        {
            name : "orange",
            type: "fruit",
            isFruit: true
        },
        {
            name : "tamoto",
            type: "vegetable",
            isFruit: false
        }
        ]

    return(
        <>
        <ol>
            {
             listItem.map((val)=>{
                return(
                    // info on this and disply inthis using map
                    // <li>{val.name}</li>
                    // prop creation ,info in one page display in ui using another component help 
                    <ListItems  item ={val.name}/> 
                )
             })   
            }
        </ol>
        </>
    )
 }
 export default ListComponent;