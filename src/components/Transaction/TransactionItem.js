import React, {useState} from 'react';
import Card from '../Card'
import './TransactionItem.css';
import {Button} from 'react-bootstrap';
import TransactionDate from './TransactionDate';
import TransactionEdit from './TransactionEdit';

const TransactionItem = (props) => {
  console.log(props);
  const [isEditing, setIsEditing] = useState(false);

    // const handleToggle= () => {
    //   setIsEditing(!isEditing);
    // }

    const showTransactionEdit = ()=>{
      setIsEditing(true);
    }
    const updateHandler = (transactionData) => {
      console.log(transactionData);
      setIsEditing(false);
      let token = localStorage.getItem('token');
      console.log(props.id, typeof(props.id));
      fetch(`http://localhost:3000/transaction_update.json`, {
          method: 'PATCH',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
          //body: JSON.stringify({"transaction": {"type_of": 'expense', amount: 11, title: 'test'}}),
          body: JSON.stringify({"transaction": transactionData, "id": props.id}),
      }).then((response)=>{
          console.log(response);
          props.onUpdateTransaction(transactionData);
      })   

    }

    const handleDelele = (event) => {
      event.preventDefault();
      console.log(props.id)
      let token = localStorage.getItem('token')
      const id = props.id
      fetch(`http://localhost:3000/transactions/${id}`, {
          method: 'DELETE',
          headers: {  
            'Authorization': `Bearer ${token}`
          }
      })
      .then(response => {
        console.log(response.status)
        if (response.status === 204) {
          props.onDeleteTransaction(props.id)
        }
      })
    }

    const stopEditingHandler = ()=>{
      setIsEditing(false);
    }
    const transactionData = {
        type_of: props.type,
        amount: props.amount, 
        title: props.title,
        description: props.description,  
        receipt: props.url, 
        date: props.date,
        category_id: Number(props.category_id),
        id: props.id
    }
    console.log(transactionData.id);
    console.log(isEditing);
    return (
      <li>
        {!isEditing && 
          <Card className='transaction-item'>
            <TransactionDate date={props.date} />
            <div className='transaction-item__description'>
              <h3>{props.category_id}</h3>
              <h4>{props.title}</h4>
              <span>{props.description}</span>
              <div className='transaction-item__price'>${props.amount}</div>
            </div>
            <div>
            <Button className='btn btn-info mr-1'onClick={showTransactionEdit}>Edit</Button>
              <Button className='btn btn-danger' onClick={handleDelele}>Delete</Button>

            </div>
          </Card>
        }
        {isEditing &&
          <Card className='transaction-item'>
            <TransactionEdit onCancel={stopEditingHandler} onUpateTransactionData={updateHandler} items={transactionData}/>
          </Card>
        } 
      </li>
    );
  };
  
  export default TransactionItem;