import React, {useState} from 'react';
import TransactionForm from './TransactionForm';
import Card from '../Card';
import {Button} from 'react-bootstrap';
import './NewTransaction.css';
import { motion } from 'framer-motion';

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
    <motion.div className='new-transaction'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{
    delay: .5,
    x: { type: "spring", stiffness: 100 },
    default: { duration: .4 },
    }}
    exit={{opacity: 0}}
    >
        
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
        
    </motion.div>
  );
};

export default NewTransaction;