


const ConditionalRenderinggg = () =>
{
    const data =  [
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
        {
            name : "potato",
            type: "vegetable",
            isFruit: false,
            id:6,
            image :"https://media.istockphoto.com/id/157430678/photo/three-potatoes.jpg?s=612x612&w=0&k=20&c=qkMoEgcj8ZvYbzDYEJEhbQ57v-nmkHS7e88q8dv7TSA="
        }
 ]

 const fruitData = data.filter((val) => val.type === "fruit");
    return(
        <>
        <center>
            <h1>TASK2 - conditional Rendering</h1>
        </center>
        {
          fruitData.map((val)=>{
            return(
                <>
                {val.type === "fruit"
                
                ?
                  <>
                      <li>{val.name}</li>
                      <div>
                        <img src={val.image} height={100} width={100} alt={val.type} />
                      </div>
                    </>
                
                :

                
                    <>
                      <li>{val.name}</li>
                      <div>
                        <img src={val.image} height={100} width={100} alt={val.type} />
                      </div>
                    </>
                }
                </>
            )
          }) 
         

        }
        </>
    );
};

export default ConditionalRenderinggg ;