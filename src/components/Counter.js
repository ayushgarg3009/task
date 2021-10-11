import React, { useState } from 'react';
import Task from './Task';

const Counter = () => {
    
    let todos = [{to:"met", id:1},
                {to:"set", id:2}];

    const [count, setcount] = useState();
    const [itemlist, setitemlist] = useState(todos);
    console.log(itemlist);

    const list = itemlist.map(co =>{
        return (
            <li>{co.to}</li>
        )
    })
    return(
        <>

        <Task itemlist={itemlist} setitemlist={setitemlist} count={count} setcount={setcount} />
            <h1>hello</h1>
            
            {list} 
        </>
    );
}

export default Counter;