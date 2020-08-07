import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import RecipeDescription from './RecipeDescription/RecipeDescription';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeNutrition from './RecipeNutrition/RecipeNutrition';
import RecipeCTA from './RecipeCTA/RecipeCTA';
import RecipeImage from './RecipeImage/RecipeImage';

class Recipe extends Component {


    render() {
        console.log(this.props.recipe)
        return (
            <Aux>
                <div className="Recipe">
                    <RecipeDescription description={{title: this.props.recipe.title, summary: this.props.recipe.summary}} />
                    <RecipeIngredients ingredients={this.props.recipe.extendedIngredients} />
                    <RecipeNutrition nutrition={this.props.recipe.nutrition} />
                    <RecipeCTA />
                    {/* <RecipeImage image={this.props.recipe.image} /> */}
                    <RecipeImage image={this.props.recipe.image} />

                </div>
            </Aux>
         );
    }
}

export default Recipe;
