import { useState } from 'react'
import Navbar from './components/Navbar'



function App() {
  const [todo , setTodo] = useState() ; 
  const [todos  , setTodos] = useState([]) ; 
  
  
  
  // for add 
  const AddInTodo = () => { 
      setTodos(todo) ; 
  }

  // for edit 
  const EditTodo = () => { 
      
  }

  // for delete 
  const DeleteTodo = () => { 

  }



  return (
    <>
    <Navbar/> 
     <div className="  container bg-red-50 h-screen-full rounded-xl mx-20 p-7"> 
     <div className='todoadd my-4 '> 
      <h1>Add todos</h1> 
      <input type=" text" className=' text text-sm text-slate-500 '
      /> 
      <button onClick={AddInTodo} className='bg-violet-300 hover:bg-violet-500 px-4 m-3 rounded-md ' >Add</button>
     </div>

     <div className="yourtodo">
      <h1>Your todos</h1> 
      <div className='flex bg-pink-100'>
        <input type="checkbox" name="" id="" />
      <div className='m-3' >{todo}</div>
      <div>
        <button className='bg-violet-300 hover:bg-violet-500 px-4 m-3 rounded-md ' onClick={EditTodo}>Edit</button>
        <button  className='bg-violet-300 hover:bg-violet-500 px-4 m-3 rounded-md ' onClick={DeleteTodo}>Delete</button>
      </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
