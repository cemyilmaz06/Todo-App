import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
const Header = () => {
    const [task, setTask] = useState("")
// console.log(task);
const addTogo=()=>{
    const newTodo={
        id:uuidv4(),
        text:task,
        completed:false
    } 
    console.log(newTodo)
    setTask("")
}

  return (
    <div className='text-center mt-5'>
        <h1 className=''>TODO APP</h1>
        <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="ekleme yapınız"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setTask(e.target.value)}
    value={task}
        
        />
        <Button id="basic-addon2"
        disabled={!task.trim()}
        onClick={addTogo}
       
        >Add Todo</Button>
      </InputGroup>

    </div>
  )
}

export default Header