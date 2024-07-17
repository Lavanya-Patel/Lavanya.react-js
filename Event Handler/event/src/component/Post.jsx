import { useEffect,useState } from "react";
export default function Post(){
    const [data,setdata]=useState([]);
    const [page,setpage]= useState(1)


const fetchdata =()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then((res)=>res.json())
    .then((data)=>{
        setdata(data)
    })
    .catch((err)=>console.log(err))
}

useEffect(()=>{
    fetchdata()
},[page])

return (
    <div className='Post'>

        {
            data.map((el)=>(
                <div key={el.id} style={{border:"2px solid black" , width:"80%", margin:"20px auto"}}>
                <h3 style={{color:"red"}}>Id :{el.id}</h3>
                <h3>UserId :{el.userId}</h3>
                <h1 style={{color:"blue"}}>{el.title}</h1>
                <h3>{el.body}</h3>
                </div>
            ))
        }

        <button disabled ={page==1} onClick={()=>setpage(page-1)}>Prev Page</button>
       <span style={{marginLeft:"10x"}}>{page}</span>
        <button disabled ={page==50} onClick={()=>setpage(page+1)}>Next Page</button>
    </div>
)
}