import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import RecipeDescription from './RecipeDescription/RecipeDescription';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeNutrition from './RecipeNutrition/RecipeNutrition';
import RecipeCTA from './RecipeCTA/RecipeCTA';

class Recipe extends Component {
    state = {
        recipe: {
            description: null,
            ingredients: null,
            nutrition: null
        }
     }
    render() {
        return (
            <Aux>
                <div className="Recipe">
                    <RecipeDescription description={this.state.recipe.description} />
                    <RecipeIngredients ingredients={this.state.recipe.ingredients} />
                    <RecipeNutrition nutrition={this.state.recipe.nutrition} />
                    <RecipeCTA />
                </div>
            </Aux>
         );
    }
}

export default Recipe;
