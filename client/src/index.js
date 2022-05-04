import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category';
import Profile  from './components/Profile/Profile';
import ProfileUpdate from './components/Profile/ProfileUpdate';
import Changepassword from './components/Profile/Changepassword';
import Navigation from './components/Navigation';
import Transactions from './components/Transaction/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import TransactionsDisplay from './components/Transaction/TransactionsDisplay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='categories' element={<Category />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/edit' element={<ProfileUpdate />} />
        <Route path='profile/changepassword' element={<Changepassword />} />
        <Route path="transactions" element={<TransactionsDisplay/>}/>
      </Routes>
    </BrowserRouter>
);
