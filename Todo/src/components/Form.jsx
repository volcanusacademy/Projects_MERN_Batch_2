import React, { useEffect, useState } from 'react'

const Form = ({ addTodo, id, todos }) => {
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('');

    useEffect(() => {

        const temp = todos.filter((item) => item.id == id);
        console.log("this data", temp);
        setTitle(temp[0]?.title)
        setdescription(temp[0]?.description)

    }, [id])


    const submitHandler = (e) => {
        e.preventDefault();
        if (id != "") {
            addTodo(id, title, description)
            // alert(`your to do has been add...`);
            setTitle("");
            setdescription("");
        }
        else {
            addTodo(Math.random(), title, description)
            // alert(`your to do has been add...`);
            setTitle("");
            setdescription("");
        }
    }
    return (

        <>
            <div className='containar text-center my-5'>



                <form onSubmit={submitHandler}>
                    title: {''}<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                    description:{''} <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} />
                    {/* <input type="submit" value='submit' /> */}
                    {/* {id !=""&&} */}
                    {id != "" ? (
                        <input type="submit" value="Edit" className='btn btn-warning my-2' />
                    ) : (
                        <input type="submit" value="Add" className='btn btn-primary my-2' />
                    )}
                    
                    {/* <button className='btn btn-warning my-2'> submit</button> */}
                </form>
            </div>

        </>

    )
}

export default Form