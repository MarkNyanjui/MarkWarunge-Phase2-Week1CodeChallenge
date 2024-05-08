import React, { useState } from 'react';
import { bankTransactions } from '../Data';



export function AddTransaction() {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [transactions, setTransactions] = useState(bankTransactions);

    function handleSubmit(e) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()),
            date,
            description,
            category,
            amount
        };

        setTransactions([...transactions, newTransaction]);


        setDate(' ')
        setDescription(' ')
        setCategory(' ')
        setAmount(' ')

    }
    return (
        <div className='addtransaction'>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <input
                        value={date}
                        onClick={(e) => setDate(e.target.value)}
                        type='date'
                        name='date' />
                    <input
                        value={description}
                        onClick={(e) => setDescription(e.target.value)}
                        type='text'
                        name='description'
                        placeholder='Description' />
                    <input
                        value={category}
                        onClick={(e) => setCategory(e.target.value)}
                        type='text'
                        name='category'
                        placeholder='Category' />
                    <input
                        value={amount}
                        onClick={(e) => setAmount(e.target.value)}
                        type='number'
                        name='amount'
                        placeholder='Amount' />
                </div>
                <button className='ui button primary' type='submit'>
                    Add Transaction
                </button>
            </form>
        </div>

    );
}
