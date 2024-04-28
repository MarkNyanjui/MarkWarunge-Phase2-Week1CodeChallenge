import React, { useState } from 'react'
import { bankTransactions } from '../Data'

function AddTransaction() {
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            date,
            description,
            category,
            amount
        }
        bankTransactions.push(newTransaction)
        setDate('')
        setDescription('')
        setCategory('')
        setAmount('')

    }
    return (
        <div className='addtransaction'>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        type='date'
                        name='date'
                    />
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        name='description'
                        placeholder='Description'
                    />
                    <input
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        type='text'
                        name='category'
                        placeholder='Category' />
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type='number'
                        name='amount'
                        placeholder='Amount' />
                </div>
                <button className='ui button primary' type='submit'>
                    Add Transaction
                </button>
            </form>
        </div>
    )
}

export default AddTransaction
