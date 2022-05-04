import React, { Component } from 'react';
import CategoryList from './CategoryList';
import createRequest from '../../request';
import Navigation from '../Navigation';

// const SERVER_URL = 'http://localhost:3000/categories.json';


class Category extends Component {
    constructor() {
        super();
        this.state = {
            categories: [
                // {id: 1, name: 'Grocery', icon: 'https://placekitten.com/50/50'}, 
                // {id: 2, name: 'Medicine', icon: 'https://placekitten.com/50/50'},
            ]
        };
    }
    
    componentDidMount() {
                
        const fetchCategories = () => {
            createRequest("/user_categories.json").then((response) => {

 
                this.setState({categories: response});

                // setTimeout(fetchCategories, 5000);
                console.log(response)
            });
        };
        fetchCategories();
    }

    render() {
        return (
            <div>
                <CategoryList categories={ this.state.categories }/>
                hey
            </div>
        );
    }
}

export default Category;