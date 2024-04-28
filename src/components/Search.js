import React, { useState } from 'react'

function Search({ onsearch }) {
    const [search, setSearch] = useState('')

    function handleSearch(e) {
        const searchTerm = e.target.value
        setSearch(searchTerm);
        onsearch(searchTerm)
    }
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search your Recent Transactions'
        value={search}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search