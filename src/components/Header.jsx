import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const Header = () => {
  return (
    <div className='text-center mt-5'>
        <h1 className=''>TODO APP</h1>
        <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="ekleme yapınız"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
    
        
        />
        <Button id="basic-addon2"
        // disabled={!task.trim()}
       
        >Add Todo</Button>
      </InputGroup>

    </div>
  )
}

export default Header