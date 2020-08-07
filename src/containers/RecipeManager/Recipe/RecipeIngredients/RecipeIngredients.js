import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import { Title, Tile } from '../../../../components';
import './_RecipeIngredients.scss';

const recipeIngredients = (props) => {
    const renderIngredients = () => {
        return props.ingredients.map((ingredient, idx) => {
            return (
            <li key={`${idx}_${ingredient.id}`}>
                <Tile className="tile tile--rounded">
                    <main><img src="{ingredient.image}" alt="" /></main>
                </Tile>
                <div>
                <p><small>{`${+(ingredient.amount).toFixed(2)} ${ingredient.unit}`}</small></p>
                    <p><b>{ingredient.name}</b></p>
                </div>
            </li>)
        })
    }
        return (
            <Aux>
                <Title level="5" className="u-m-t-md">Ingredients</Title>
                <ul className="u-d-flex RecipeIngredients">
                    {renderIngredients()}
                </ul>
            </Aux>
         );
}

export default recipeIngredients;
