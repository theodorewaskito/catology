import React from 'react'
import SearchBar from '../components/SearchBar'
import SearchCards from '../components/SearchCards'

export default function SearchPage() {
  return (
    <div className='m-4'>
      <SearchBar/>
      <SearchCards/>
    </div>
  )
}
