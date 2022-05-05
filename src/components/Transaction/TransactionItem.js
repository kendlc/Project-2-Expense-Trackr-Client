import React, {useState} from 'react';
import Card from '../Card'
import './TransactionItem.css';
import {Button} from 'react-bootstrap';
import TransactionDate from './TransactionDate';
import TransactionEdit from './TransactionEdit';

const TransactionItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

    const showTransactionEdit = ()=>{
      setIsEditing(true);
    }

    const updateHandler = (transactionData) => {
      setIsEditing(false);
      let token = localStorage.getItem('token');
      fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/transaction_update.json`, {
          method: 'PATCH',
          headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({"transaction": transactionData, "id": props.id}),
      }).then((response) => {
          props.onUpdateTransaction(transactionData);
      })   
    }

    const handleDelele = (event) => {
      event.preventDefault();
      let token = localStorage.getItem('token')
      const id = props.id
      fetch(`${process.env.REACT_APP_BACKEND_SERVER_PATH}/transactions/${id}`, {
          method: 'DELETE',
          headers: {  
            'Authorization': `Bearer ${token}`
          }
      })
      .then(response => {
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
    
    let cssStyleClassName ="";
    if (props.type === "expense"){
        cssStyleClassName = "transaction-item expense" ;
    }else{
        cssStyleClassName ="transaction-item";
    }

    return (
      <li>
        {!isEditing && 
          <Card className={cssStyleClassName}>
            <TransactionDate date={props.date} />
            <div className='transaction-item__description'>
              <h3>{props.type.toUpperCase()}: {props.category_name}</h3>
              <h5>{props.title}</h5>
              {/* <span>{props.description}</span> */}
            </div>
            
            <div className='transaction-item__price'>${props.amount}</div>
            <div className='transaction-item_btn btn-group ml-auto'>
            <Button className='btn btn-info mr-2 ml-auto'onClick={showTransactionEdit}>Edit</Button>
              <Button className='btn btn-danger ml-auto' onClick={handleDelele}>Delete</Button>

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