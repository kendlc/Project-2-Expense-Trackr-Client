import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import Card from '../Card';
import {Button} from 'react-bootstrap';
import './NewTransaction.css';

const NewTransaction = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    
    const saveTransactionDataHandler = (transactionData) => {
        setIsEditing(false);
        let token = localStorage.getItem('token');
        fetch('http://localhost:3000/transactions.json', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify({"transaction": {"type_of": 'expense', amount: 11, title: 'test'}}),
            body: JSON.stringify({"transaction": transactionData}),
        }).then(()=>{
            props.onAddTransaction(transactionData);
        })
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler =() => {
        setIsEditing(false);    
    }

  return (
    <div className='new-transaction'>
        <Card className='transaction-item'>
        {!isEditing && (
            <Button className="secondary"onClick={startEditingHandler}>Add New Expense</Button>
        )}
        {isEditing && (
            <TransactionForm 
                onSaveTransactionData={saveTransactionDataHandler} 
                onCancel={stopEditingHandler}
            />
        )} 
        </Card>
    </div>
  );
};

export default NewTransaction;