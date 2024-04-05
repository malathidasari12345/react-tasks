


const ExampleFilter = ()=>{
   const emp =
   [
    {
     name : "dora",
     designation : "react developer",
     salary:20000
    },
    {
        name : "bujji",
        designation : "frontend developer",
        salary:25000
       },
       {
        name : "dora1",
        designation : "angular developer",
        salary:30000
       },
       {
        name : "dora2",
        designation : "react developer",
        salary:35000
       }
    
   ]

    return(
        <>
        {
         emp.filter((val)=>
            val.designation === "angular developer"
         ).map((val)=>{
            return(
                <h3>Name:{val.name}</h3>
            )
         })
          
        
        }
         
        </>
    )
}
export default  ExampleFilter;