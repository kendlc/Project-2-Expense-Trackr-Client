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
        fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/transactions.json?`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"transaction": transactionData}),
        }).then((resp)=>{
            return resp.json(); 
        }).then((parsedData)=>{
            props.onAddTransaction(parsedData);
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
        
        {!isEditing && (
        <Button className="new-transaction_button  secondary"
            onClick={startEditingHandler}>Add New Transaction</Button>
        )}
        {isEditing && (
        <Card >
            <TransactionForm 
                onSaveTransactionData={saveTransactionDataHandler} 
                onCancel={stopEditingHandler}
            />
        </Card>
        )} 
        
    </div>
  );
};

export default NewTransaction;