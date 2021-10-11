import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Task = ({itemlist, setitemlist, count, setcount}) => {
  
    console.log(count);

    const handleChange= (e)=> {
        console.log(e.target.value)
        setcount(e.target.value)
        
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        let ninja=[...itemlist, {to:count,id: uuidv4() }];
        setitemlist(ninja)
    }

    return(
        <>
        <h1>Hell</h1>
        <form onSubmit={handleSubmit}>
            
            <input type="text" id="hell" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        


        {/* <button onClick={()=>setcount(count+1)}>+</button>
        <button onClick={()=>setcount(count-1)}>-</button> */}
        </>
    )
}

export default Task; 