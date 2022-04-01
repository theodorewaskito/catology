import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { getCats } from "../store/actions/catAction";
import CatCard from "./CatCard";
import useLazyLoad from "./useLazyLoad";

import clsx from 'clsx'

const NUM_PER_PAGE = 10;
const TOTAL_PAGES = 8;

export default function Cards() {
  const dispatch = useDispatch()
  const triggerRef = useRef(null);

  const cats = useSelector(state => state.listState.cats)
  // console.log(cats, "test");        

  const onGrabData = (currentPage) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
    setTimeout(() => {
        const data = cats.slice(
        ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
        NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
        );
        console.log(data);
        resolve(data);
    }, 2000);
    });
  };

  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <>
      <div></div>
      {
        data.map((cat) => {
          return (
            <CatCard
              cat={cat}
            >
            </CatCard>
          )
        })
      }
      <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
        Loading...
      </div>
    </>
  )
}
