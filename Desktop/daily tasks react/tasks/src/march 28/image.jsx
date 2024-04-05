import ShowTable from "./table";




function DisplayImage(){

    const listItems =[
        {
            name : "apple",
            type: "fruit",
            id:1,
            isFruit: true,
            image :"https://media.istockphoto.com/id/184276818/photo/red-apple.webp?b=1&s=612x612&w=0&k=20&c=TBBd7De6JAG56-Wz8vrwIFqxnZ0KctXFZCFsmsBK8Xk="
        },
        {
            name : "banana",
            type: "fruit",
            isFruit: true,
            id:2,
            image :"https://cdn.pixabay.com/photo/2017/03/01/16/34/banana-2109006_1280.jpg"
        },
        {
            name : "tomato",
            type: "vegetable",
            isFruit: false,
            id:3,
            image :"https://media.istockphoto.com/id/174930196/photo/tomato.jpg?s=612x612&w=0&k=20&c=29dLk7xXAijz2uQKLUuLKYSHDFolZtIWHDPh398h7iE="
        },
        {
            name : "apple",
            type: "fruit",
            isFruit: true,
            id:4,
            image :"https://media.istockphoto.com/id/184276818/photo/red-apple.webp?b=1&s=612x612&w=0&k=20&c=TBBd7De6JAG56-Wz8vrwIFqxnZ0KctXFZCFsmsBK8Xk="
        },
        {
            name : "potato",
            type: "vegetable",
            isFruit: false,
            id:4,
            image :"https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA="
        },
        {
            name : "banana",
            type: "fruit",
            isFruit: true,
            id:5,
            image :"https://cdn.pixabay.com/photo/2017/03/01/16/34/banana-2109006_1280.jpg"
        },
        {
            name : "potato",
            type: "vegetable",
            isFruit: false,
            id:6,
            image :"https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA="
        },
        ]

    return(
        <>
        <center>
     <tbody>
            <tr>
                <th>S.no</th>
                <th>name</th>
                <th>Type</th>
                <th>Image</th>
            </tr>
                   {
                    listItems.map((value)=>{
                        // console.log(value)
                        return(
                            // <tr>
                            //     <td>{value.id}</td>
                            //     <td>{value.name}</td>
                            //     <td>{value.type}</td>
                            //     <td><img src={value.image} alt={value.type} height={100} width={100}></img></td>
                            // </tr>
                            <ShowTable   data = {value} />
                        )
                     })
                    }
            </tbody>
           
               
        </center>
        </>
    )
}
export default DisplayImage;