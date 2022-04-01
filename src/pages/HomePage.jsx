import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import { getCats } from "../store/actions/catAction";

export default function HomePage() {
  const dispatch = useDispatch()

  const cats = useSelector(state => state.listState.cats)
  
  useEffect(() => {
    dispatch(getCats())
  }, [])

  return (
    <div className='m-4'>
      <Cards/>
    </div>
  )
}
