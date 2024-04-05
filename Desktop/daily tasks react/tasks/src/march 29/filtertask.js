

const FilterTask =()=>{

    const emp = [
        {
            name:"ram",
            Designation:"fronted Developer",
            salary:20000,
        },
        {
            name:"raju",
            Designation:"Backend Developer",
            salary:25000,
        },
        {
            name:"raghu",
            Designation:"react developer",
            salary:25000,
        },
        {
            name:"dora",
            Designation:"angular developer",
            salary:20000,
        },
        {
            name:"bujji",
            Designation:"angular developer",
            salary:35000,
        },
        {
            name:"motu",
            Designation:"Backend Developer",
            salary:18000,
        },
        {
            name:"tom",
            Designation:"react developer",
            salary:30000,
        },
        {
            name:"jerry",
            Designation:"react developer",
            salary:17000,
        },
        {
            name:"rani",
            Designation:"python developer",
            salary:29000,
        },
        {
            name:"raji",
            Designation:"python developer",
            salary:40000,
        }
    ]

// function for display names based on designation
const FilterArry = (hello) =>
{
    return emp.filter((val)=>(
       val.Designation == hello
    ))
}

// function for names and designations based on salary
const FilterArry2 = (sal1,sal2)=>{
    // console.log(sal1,sal2)
    return emp.filter((val)=>(
        val.salary > sal1 && val.salary < sal2
    ))
}


    return(
        <>
        <h5>Name of employees List based on React developers:</h5>
        {
        FilterArry("react developer") .map((val) => {
            return(
                <>
                <ul>
                    <li>{val.name}</li>
                </ul>
                </>
            )
         })
        }
        <h4>Name of employees List based on frontend developers:</h4>
        {
            FilterArry("fronted Developer") .map((val) => {
                return(
                    <>
                    <ul>
                        <li>{val.name}</li>
                    </ul>
                    </>
                )
             }) 
        }
        <h4>Name of employees List based on backend developers:</h4>
        {
             FilterArry("Backend Developer").map((value) =>{
                return(
                    <>
                    <ul>
                        <li>{value.name}</li>
                    </ul>
                    </>
                )
             })
        }
        <h4>List of names and designations between 10k - 20k:</h4>
        {
          FilterArry2( 10000 , 20000).map((val)=>{
            return(
                <ul>
                    <li>{val.name}-{val.salary}    {val.Designation}</li>
                </ul>
            )
          })
        }
        <h4>List of names and designations between 20k-30k:</h4>
        {
           FilterArry2( 20000,30000).map((val)=>{
            return(
                <ul>
                    <li>{val.name}-{val.salary}   {val.Designation}</li>
                </ul>
            )
          })  
        }
        </>
    )
}
export default FilterTask;