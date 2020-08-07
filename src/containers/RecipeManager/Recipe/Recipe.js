import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import RecipeDescription from './RecipeDescription/RecipeDescription';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeNutrition from './RecipeNutrition/RecipeNutrition';
import RecipeCTA from './RecipeCTA/RecipeCTA';
import RecipeImage from './RecipeImage/RecipeImage';

class Recipe extends Component {

    render() {
        return (
            <Aux>
                <div className="Recipe">
                    <RecipeDescription description={this.props.recipe.description} />
                    <RecipeIngredients ingredients={this.props.recipe.ingredients} />
                    <RecipeNutrition nutrition={this.props.recipe.nutrition} />
                    <RecipeCTA />
                    {/* <RecipeImage image={this.props.recipe.image} /> */}
                    <RecipeImage image="http://lorempixel.com/output/food-h-c-798-804-9.jpg" />

                </div>
            </Aux>
         );
    }
}

export default Recipe;
