import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/index';
class RecipeCTA extends Component {
    state = {  }
    render() {
        return (
            <Aux>
                <Button>Instructions</Button>
                <Button>Add to favorites</Button>
            </Aux>
         );
    }
}

export default RecipeCTA;
