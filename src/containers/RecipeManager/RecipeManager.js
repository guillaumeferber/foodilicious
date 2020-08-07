import React, { Component } from 'react';
import { SideToolbar, Toolbar } from '../../components';
import SuggestionList from '../SuggestionList/SuggestionList';
import Recipe from './Recipe/Recipe';
import axios from '../../axios-api';
import './_RecipeManager.scss';
import data from './recipe.json';

class RecipeManager extends Component {
    state = {
        recipes: []
    }

    componentDidMount() {
        this.setState({recipes: data})
        // axios.get(`random?number=2&apiKey=72425fcc0db44f0eaeacb881e0bc0546`)
        // .then(res => {
        //     this.setState({recipes: res.data.recipes})
        // })
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
