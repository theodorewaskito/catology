import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { 
  InputGroup,
  FormControl,
  Button,
  Form,
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { searchCat } from '../store/actions/catAction';

export default function SearchBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')

  function submitSearch(e) {
    e.preventDefault()
    dispatch(searchCat(search))
    // navigate('/search')
  }

  return (
    <Form onSubmit={submitSearch} className='mb-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Cat's Name</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Cats Name" 
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>

      <div className="d-flex justify-content-end">
        <Button 
          variant="outline-secondary" 
          id="button-addon2" 
          type="submit"
        >
          Search
        </Button>
      </div>
    </Form>
    
  )
}
