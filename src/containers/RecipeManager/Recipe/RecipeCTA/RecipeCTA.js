import React, { Component } from 'react';
import Aux from '../../../../hoc/Aux/Aux';
import { Button } from '../../../../components';
class RecipeCTA extends Component {
    state = {  }
    render() {
        return (
            <Aux>
                <Button variant="primary">Instructions</Button>
                <Button variant="tertiary">Add to favorites</Button>
            </Aux>
         );
    }
}

export default RecipeCTA;
