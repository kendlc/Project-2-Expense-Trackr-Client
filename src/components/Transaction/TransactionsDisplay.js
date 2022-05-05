import React, {useState, useEffect} from 'react';
import NewTransaction from './NewTransaction';
import Transactions from './Transactions';
import createRequest from '../../request';
import TransactionChartYear from './TransactionChartYear';

const TransactionsDisplay = () => {
    const [transactions, setTransactions] = useState([]);
    const [categoryList, setCategoryList] = useState([]); 

    useEffect(() => {
        const fetchCategories = () => { 
            createRequest('/categories.json')
            .then((data) => {
                setCategoryList(data);       
            })
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchTransactions = () => {
            createRequest('/transactions.json')
            .then((data) => {
                setTransactions(data);
            })
        }
        fetchTransactions();
    }, []);    

    const addTransactionHandler = (transaction) => {
        setTransactions((prevTransactions) => {
          return [transaction, ...prevTransactions];
        });
    };

    const updateTransactionHandler =(transactionData)=>{
        setTransactions((prevTransactions) => {         
            const updatedTransaction = prevTransactions.filter(
                function(transaction) {
                    return transaction.id !== transactionData.id
                });
        return [transactionData, ...updatedTransaction]; 
        })
    }

    const deleteTransactionHandler = (deletedId) => {
        setTransactions((prevTransactions) => {
            const deleteTransaction = prevTransactions.filter(function (transaction) {
                return transaction.id !== deletedId
            });
            return deleteTransaction
        });
    };
    
    const sortedTransactions = transactions.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });

    if (transactions.length >0) {   
        return (
            <div >
                <NewTransaction onAddTransaction={addTransactionHandler}/>
               
                <Transactions
                    items={sortedTransactions}
                    onDeleteTransaction={deleteTransactionHandler}
                    onUpdateTransaction={updateTransactionHandler}
                    categories={categoryList}
                />
               
                <TransactionChartYear items={transactions}/>
            </div>
        )
    } else {
        return <NewTransaction onAddTransaction={addTransactionHandler}/>
    }
}

export default TransactionsDisplay;