import React from 'react';
import { Title, Tile } from '../../../../components';
import Aux from '../../../../hoc/Aux/Aux';
import './_RecipeNutrition.scss';
const recipeNutrition = (props) => {
    return (
        <Aux>
            <div className="RecipeNutrition">
                <Title level="5" className="u-m-t-md">Nutrional Values</Title>
                <ul className="u-d-flex">
                    <li>
                        <Tile className="tile">
                            <header><b>351</b></header>
                            <main>Calories</main>
                            <footer><small>kcal</small></footer>
                        </Tile>
                    </li>
                    <li>
                        <Tile className="tile">
                            <header><b>15</b></header>
                            <main>Protein</main>
                            <footer><small>g</small></footer>
                        </Tile>
                    </li>
                    <li>
                        <Tile className="tile">
                            <header><b>75</b></header>
                            <main>Fat</main>
                            <footer><small>g</small></footer>
                        </Tile>
                    </li>
                    <li>
                        <Tile className="tile">
                            <header><b>82.5</b></header>
                            <main>Carbs</main>
                            <footer><small>g</small></footer>
                        </Tile>
                    </li>
                </ul>
            </div>
        </Aux>
     );
}

export default recipeNutrition;
