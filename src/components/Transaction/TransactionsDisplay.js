import React, {useState, useEffect} from 'react';
import NewTransaction from './NewTransaction';
import Transactions from './Transactions';
import Card from '../Card';
import createRequest from '../../request';
import TransactionItem from './TransactionItem';

const TransactionsDisplay = () => {
    const [transactions, setTransactions] = useState([]);
    const [month, setMonth] = useState();


    // const input = '/transactions.json';
    // useEffect(()=>{
    //     const fetchTransactions = async() => { 
    //         createRequest(input).then((data)=> {
    //             console.log(data);
    //             setTransactions(data);       
    //         })
    //     }   
    //     const timer = setTimeout(()=>{
    //         fetchTransactions();
    //     }, 1000);
    //     return () => clearTimeout(timer);    
    // }, [input]);

    useEffect(() => {
        let mounted = true;
            createRequest('/transactions.json')
            .then(result => {
                if(mounted){
                setTransactions(result); 
                };
                console.log('working',result);
            })
            return()=> mounted = false;
            
        // const fetchTransactions = () => { 
        //     createRequest('/transactions.json')
        //     .then(result => {
        //         if(mounted){
        //         setTransactions(result); 
        //         };
        //     })
        //     return()=> mounted = false;
        // }   
        // const timer = setTimeout(()=>{
            // fetchTransactions();
        // }, 1000);
        // return () => clearTimeout(timer);    
    }, []);
    

    const addTransactionHandler = (transaction) => {
        setTransactions((prevTransactions) => {
          return [transaction, ...prevTransactions];
        });
    };

    const updateTransactionHandler =(transactionData)=>{
        console.log(transactionData);
        setTransactions((prevTransactions)=> {;           
            const updatedTransaction = prevTransactions.filter(
                function(transaction) {
                    return transaction.id !== transactionData.id
                });
            return [transactionData,updatedTransaction];
        })
    }

    const deleteTransactionHandler = (deletedId) => {
        setTransactions((prevTransactions) => {
            const delelteTransaction = prevTransactions.filter(function (transaction) {
                return transaction.id != deletedId
            });
            return delelteTransaction
        });
    };
    console.log(transactions);
    return (
        <div >
            <NewTransaction onAddTransaction={addTransactionHandler}/>
            <Transactions items={transactions} onDeleteTransaction={deleteTransactionHandler} onUpdateTransaction={updateTransactionHandler}/>
        </div>
    )

}

export default TransactionsDisplay;