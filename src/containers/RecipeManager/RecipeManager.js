import React, { Component } from 'react';
import { SideToolbar, Toolbar } from '../../components';
import SuggestionList from '../SuggestionList/SuggestionList';
import Recipe from './Recipe/Recipe';
import './_RecipeManager.scss';

class RecipeManager extends Component {
    state = {
        recipes: [
            {
                id: 0,
                description: null,
                ingredients: null,
                nutrition: null
            },
            {
                id: 1,
                description: null,
                ingredients: null,
                nutrition: null
            }
        ]
    }

    renderRecipeList = () => {
        return this.state.recipes && this.state.recipes.map((recipe, idx) => {
            return (<Recipe recipe={recipe} key={idx}/>)
        });
    }
    render() {
        return (
            <div className="c-row">
                <div className="c-col-1">
                    <SideToolbar />
                </div>
                <div className="c-col-11">
                    <Toolbar />
                    <div className="u-d-flex RecipeManager">
                        {this.renderRecipeList()}
                    </div>
                    <SuggestionList />
                </div>
            </div>
         );
    }
}

export default RecipeManager;
