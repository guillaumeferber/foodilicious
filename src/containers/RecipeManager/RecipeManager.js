import React, { Component } from 'react';
import { SideToolbar, Toolbar } from '../../components';
import SuggestionList from '../SuggestionList/SuggestionList';
import Recipe from './Recipe/Recipe';
import axios from '../../axios-api';
import './_RecipeManager.scss';
// import data from './recipe.json';

class RecipeManager extends Component {
    state = {
        recipes: [],
        similar: [],
        selectedFilter: 'all'
    }

    componentDidMount() {
        this.loadInitialRecipe();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.recipes !== this.state.recipes && this.state.recipes.length) {
            this.getSimilar(this.state.recipes[0].id);
        }
    }

    loadInitialRecipe = () => {
        axios.get(`random?number=1&apiKey=72425fcc0db44f0eaeacb881e0bc0546`)
        .then(res => {
            this.setState({recipes: res.data.recipes})
        })
    }

    getSimilar = (id) => {
        if(id) {
            axios.get(`${id}/similar?number=6&apiKey=72425fcc0db44f0eaeacb881e0bc0546`)
            .then(res => {
                this.setState({similar: res.data})
            })
        }
    }
    renderRecipeList = () => {
        if (!this.state.recipes) {
            return <h5>Sorry, no recipe has been found</h5>
        }
        return this.state.recipes.map((recipe, idx) => {
            return (<Recipe recipe={recipe} key={idx}/>)
        });
    }

    filterRecipes = (filter, type) => {
        if (type === 'ingredient') {
            if (filter !== 'all') {
                axios.get(`findByIngredients?ingredients=${filter}&number=1&apiKey=72425fcc0db44f0eaeacb881e0bc0546`)
                .then(res => {
                    this.setState({
                        recipes: res.data,
                        selectedFilter: filter
                    })
                });
            } else {
                this.loadInitialRecipe();
            }

        }
    }

    render() {
        return (
            <div className="c-row">
                <div className="c-col-1">
                    <SideToolbar clicked={this.filterRecipes} selected={this.state.selectedFilter}/>
                </div>
                <div className="c-col-11">
                    <Toolbar clicked={this.filterRecipes} selected={this.state.selectedFilter}/>
                    <div className="u-d-flex RecipeManager">
                        {this.renderRecipeList()}
                    </div>
                    <SuggestionList similar={this.state.similar}/>
                </div>
            </div>
         );
    }
}

export default RecipeManager;
