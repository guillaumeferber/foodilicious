import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { Title } from '../../../components';

const recipeNutrition = (props) => {
    return (
        <Aux>
            <Title level="5">Nutrional Values</Title>
            <ul>
                <li>Nutrional Value #1</li>
                <li>Nutrional Value #2</li>
                <li>Nutrional Value #3</li>
                <li>Nutrional Value #4</li>
                <li>Nutrional Value #5</li>
            </ul>
        </Aux>
     );
}

export default recipeNutrition;
