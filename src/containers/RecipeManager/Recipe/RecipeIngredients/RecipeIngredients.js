import React from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import { Title, Tile } from '../../../../components';
import './_RecipeIngredients.scss';

const recipeIngredients = (props) => {
        return (
            <Aux>
                <Title level="5" className="u-m-t-md">Ingredients</Title>
                <ul className="u-d-flex RecipeIngredients">
                    <li>
                        <Tile className="tile tile--rounded">
                            <main></main>
                        </Tile>
                        <div>
                            <p><small>1/2 Kilogram</small></p>
                            <p><b>Fresh Chicken</b></p>
                        </div>
                    </li>
                    <li>
                        <Tile className="tile tile--rounded">
                            <main></main>
                        </Tile>
                        <div>
                            <p><small>1/2 Kilogram</small></p>
                            <p><b>Fresh Chicken</b></p>
                        </div>
                    </li>
                    <li>
                        <Tile className="tile tile--rounded">
                            <main></main>
                        </Tile>
                        <div>
                            <p><small>1/2 Kilogram</small></p>
                            <p><b>Fresh Chicken</b></p>
                        </div>
                    </li>
                    <li>
                        <Tile className="tile tile--rounded">
                            <main></main>
                        </Tile>
                        <div>
                            <p><small>1/2 Kilogram</small></p>
                            <p><b>Fresh Chicken</b></p>
                        </div>
                    </li>
                </ul>
            </Aux>
         );
}

export default recipeIngredients;
