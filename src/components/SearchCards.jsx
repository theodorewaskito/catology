import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { getCats } from "../store/actions/catAction";
import CatCard from "./CatCard";

export default function SearchCards() {
  const dispatch = useDispatch()


  const cats = useSelector(state => state.listState.cats)
  console.log(cats, "test");        

  return (
    <>
      <div></div>
      {
        cats.map((cat) => {
          return (
            <CatCard
              cat={cat}
            >
            </CatCard>
          )
        })
      }
    </>
  )
}