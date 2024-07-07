import React, { useState } from 'react'

const Todos = ({todos,deleteTodo,setId}) => {
    
  return (
    <div className='container '>
    {todos.map((todo)=>(
        <div key={todo.id} className=' bg-success p-3 my-3 text-center con'>
            <div>{todo.title}</div>
            <p>{todo.description}</p>
            <p>{todo.Movie}</p>

            <div>
                <button className="btn btn-warning mx-2" onClick={()=>setId(todo.id)}>Edit</button>
                <button className="btn btn-danger mx-2 m-2" onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>

    ))}

    </div>
  )
};

export default Todos