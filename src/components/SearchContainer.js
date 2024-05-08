import React, {useState} from 'react'
import Search from './components/Search'
import Transactions from './components/Transactions'
import { bankTransactions } from '../Data'

function SearchContainer() {
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm)
    setSearchTerm(searchTerm)
}
const filteredTransactions = bankTransactions.filter(transactions => 
  transactions.description.toLowerCase().includes(searchTerm.toLowerCase())
)
  return (
    <div>
        <h1>Transactions</h1>
        <Search onsearch={handleSearch} />
        <Transactions props={filteredTransactions} />
    </div>
  )
}


export default SearchContainer