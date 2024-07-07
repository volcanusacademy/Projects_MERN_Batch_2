import { useState } from 'react'
import Todos from './components/Todos'
import Form from './components/Form'

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Inception",
      description:
        "A skilled thief is given a chance at redemption if he can successfully perform an inception.",
    },
    {
      id: 2,
      title: "The Matrix",
      description:
        "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
    },
  ]);

  const [id, setId] = useState("")

  // add todo
  const addTodo = (id, title, desc) => {

    const obj = {
      id,
      title,
      description: desc,
    };

    if(id != ""){
      setTodos((prevdata)=>prevdata.map((item)=>(item.id==id)?{...item,...obj}:item))

    }
    else{
      
      setTodos([...todos, obj]);
    }
    setId("");
  };
  //delete todo

const deleteTodo = (id) =>{
  // const filterTodo = todos.filter((item)=>item.id != id)
  if(confirm("Aer you delete")){

    setTodos(todos.filter((item)=>item.id != id))
  }
}

// Edit todo

console.log("edit ke liye id aa gayi =",id);

  return (
    <>
      <Form addTodo={addTodo} todos={todos} id={id}/>
      <div>
        <Todos todos={todos}  deleteTodo={deleteTodo} setId={setId}/>
      </div>
    </>
  );
};

export default App;