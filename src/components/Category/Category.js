import React, { Component } from 'react';
import CategoryList from './CategoryList';
import createRequest from '../../request';


class Category extends Component {
    constructor() {
        super();
        this.state = {
            categories: []
        };
    }
    
    componentDidMount() {
                
        const fetchCategories = () => {
            createRequest("/user_categories.json").then((response) => {
                this.setState({categories: response});
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